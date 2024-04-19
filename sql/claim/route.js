import { Admission, AdmissionPreauth, AdmissionStatus, ClaimMst, ClaimStatus, ClaimStatusPayment } from "@/models/sql/PreauthModel";
import { Doctor } from "@/models/sql/HospitalModel";
import { NextResponse, NextRequest } from "next/server";
import { where } from "sequelize";
import { connectDb } from "@/util/connect";
import UserBook from "@/models/sql/user-book";
import BpaModel from "@/models/sql/bpa-model";
import ClaimModel from "@/models/sql/claim-model";
import commonData from "../../sql/common-data.json"

Admission.hasOne(AdmissionPreauth, { foreignKey: "ap_patient" });
AdmissionPreauth.belongsTo(Admission, { foreignKey: "preauth_id" });
export async function GET(req, res) {
    const name = req.nextUrl.searchParams.get('name');
    await connectDb();

    if (name == `list`) {
        // const userObj = await UserBook.find({}, { _id: true, Doctors: true, SqlId: true });
        // const UserData = userObj.reduce((cb, user) => {
        //     // const { _id, SqlId } = user; //console.log("newuser:", newuser)
        //     (cb[user.SqlId] = cb[user.SqlId] || []).push(user);
        //     return cb;
        // }, {});

        const bpaObj = await BpaModel.find({}, { _id: true, SqlId: true });
        const BpaData = bpaObj.reduce((cb, user) => {
            const { _id, SqlId } = user;
            (cb[user.SqlId] = cb[user.SqlId] || []).push(_id.toString());
            return cb;
        }, {});

        // console.log("userData", UserData, BpaData)
        const preauthData = await Admission.findAll({ raw: true, include: [AdmissionPreauth], offset: 0, limit: 1000 });

        const admission_ids = preauthData.map(({ patient_id }) => patient_id)
        console.log(admission_ids)
        // const UserData = await getUserDetail();
        const { admission, claimsLists } = await InsertClaim(preauthData, admission_ids, BpaData);
        return NextResponse.json({ message: "success", data: claimsLists })
    } else if (name === 'delete') {
        try {
            await ClaimModel.deleteMany({});
            console.log('All Data successfully deleted');
            return NextResponse.json({ "message": "all empanel ment data deleted." })
        } catch (err) {
            console.log(err);
        }
    }
}

const InsertClaim = async (admission, fk_status_array, bpa) => {
    const StatusDataCom = [...commonData[`preauth_status`], ...commonData[`claim_status`]];
    const relData = commonData[`relation`];

    let ad_status = await getAdmissionStatus(fk_status_array);
    const { claimsLists, claimIds } = await getClaimList(fk_status_array);
    const doctorData = await getUserDetail();
    const sqlDoctor = await getDoctor();

    // claim status
    const { my_claim_status, StatusIds } = await getClaimStatus(claimIds);
    const payment = await getPayment(StatusIds);
    // console.log("my_claim_status", payment)
    const sqlids = await IsClaimExist();
    let failed_row = 0;
    admission.forEach(row => {
        let sql_id = row.patient_id;


        if (sqlids.includes(sql_id)) return false;
        let [user] = doctorData[row.hospital];
        if (!bpa[row.bpa] || !user.id) {
            failed_row++;
            return false;
        }


        let [bpa_id] = bpa[row.bpa];
        let hospital_doctors = sqlDoctor?.[row.hospital] ? sqlDoctor?.[row.hospital] : ``;

        // console.log("user_id dfdf", hospital_doctors.length, hospital_doctors, user.Doctors.length)
        let mongoDoctor = ``;
        if (hospital_doctors.length > 1) {
            hospital_doctors.forEach((doct, i) => {
                if ((doct.id != row.doctor) || user.Doctors.length == 0) return false;
                user.Doctors.forEach((ud, index) => {
                    // console.log(doct.doctor_name, ":-", ud);
                    if (doct.doctor_name != ud.Name) return false;
                    mongoDoctor = ud['_id'].toString();
                });

            })
        } else if (hospital_doctors.length == 1) {
            if (hospital_doctors[0]?.doctor_name == user.Doctors[0]['Name']) {
                mongoDoctor = user.Doctors[0]['_id'].toString();
            }
        }

        // case status data
        let case_status = [];
        if (ad_status[sql_id]) {
            case_status = ad_status[sql_id].map(({ last_status, status_bill_amt, status_remarks, status_attachment, status_created }) => {
                let mypreauth_status = ``;
                StatusDataCom.forEach((mongostatus) => {
                    if (mongostatus.SQL !== last_status) return false;
                    mypreauth_status = mongostatus.Id
                })

                return {
                    "Status": mypreauth_status,
                    "StatusBillAmt": status_bill_amt,
                    "StatusDesc": status_remarks,
                    "StatusDoc": status_attachment,
                    "StatusDate": status_created
                }
            }
            );
        }

        let last_status = case_status.length ? case_status[case_status.length - 1]['Status'] : ``;
        // console.log("case_status:", case_status.length ? case_status[case_status.length - 1]?.['Status'] : `Not available`)

        //  claim Data start
        const claim_final_data = {
            IsRecieved: false,
            RecievedRemark: ``,
            RecievedDate: ``,
            PaidDate: ``
        };
        const claim_data = claimsLists?.[sql_id];
        let claim_status_final_doc = [];
        if (claim_data?.length) {
            claim_final_data[`IsRecieved`] = claim_data[0][`claim_recieved`] ? true : false;
            claim_final_data[`RecievedDate`] = claim_data[0][`recieve_date`];
            claim_final_data[`RecievedRemark`] = claim_data[0][`recieve_remark`];
            claim_final_data[`PaidDate`] = claim_data[0][`paid_date`] != '0000-00-00' ? claim_data[0][`paid_date`] : ``;

            const statusData = my_claim_status[claim_data[0][`claim_id`]];
            // last Claim Status
            // last_status = statusData[statusData.length - 1]['cl_status'];
            // let mypreauth_status = ``;
            StatusDataCom.forEach((lastMongostatus) => {
                if (lastMongostatus.SQL !== statusData[statusData.length - 1]['cl_status']) return false;
                last_status = lastMongostatus.Id
            })

            claim_status_final_doc = statusData.map((statusRow, index) => {

                const payment_data = payment[statusRow?.cl_id];

                const pay = payment_data?.map(row => {
                    console.log("row.cp_pod_date:", `${sql_id}:`, row.cp_pod_date)
                    return {
                        PodNo: row.cp_pod_no,
                        DeliveryDate: ``,
                        PodDate: (row.cp_pod_date !== `0000-00-00 00:00:00` || row.cp_pod_date != `Invalid Date`) ? row.cp_pod_date : ``,
                        UtrNo: row.cp_utr_no,
                        UtrDate: ``,//(row.cp_utr_date !== `0000-00-00 00:00:00` || row.cp_utr_date !== `1970-01-01 00:00:00`) ? row.cp_utr_date : ``,
                        UtrAmt: row.cp_utr_amt,
                        Point: row.cp_point,
                        Tds: row.cp_tds,
                        Np: row.cp_np,
                        CoPay: row.cp_co_pay,
                        Deduction: row.cp_deduction,
                        Discount: row.cp_discount,
                        Os: row.cp_os,
                        ApproveDiff: row.cp_approve_diff,
                        PayDate: row.cp_pay_created
                    }
                });

                let clStatus = ``;
                StatusDataCom.forEach((caseStatusrow) => {
                    if (caseStatusrow.SQL !== statusRow.cl_status) return false;
                    clStatus = caseStatusrow.Id
                })
                return {
                    "Status": clStatus,
                    "StatusDesc": statusRow.cl_remarks,
                    "StatusDoc": statusRow.cl_attachment,
                    "StatusDate": statusRow.cl_created,
                    "Payment": pay
                }
            }
            );
            // console.log(claim_data[0][`claim_id`], statusData)
        }
        let preauth_relation = ``;

        relData.forEach((caseRel) => {
            if (caseRel.SQL !== parseInt(row.relation)) return false;
            preauth_relation = caseRel.Id
        })
        // [117, 91, 92, 86, 64, 79, 101, 73, 66, 119, 96, 78, 102, 105, 118, 80, 67]
        const currentData = {
            PatientName: row.patient_name,
            SqlId: sql_id,
            Type: row.patient_tp,
            Hospital: user.id,
            Bpa: bpa_id,
            Payer: bpa_id,
            Mrd: row.mrd_no,
            Doa: row.doa !== `0000-00-00` ? row.doa : ``,
            Dod: row.dod !== `0000-00-00` ? row.dod : ``,
            MobileNo: row.rel_mobile,
            Policy: row.policy_no,
            Uhid: row.uhid,
            CorporateName: row.corp_name,
            EmpId: row.emp_id,
            TreatmentDesc: row.investgation_detail,
            DocAttached: ``,
            RoomFee: row["admission_preauth.end_room_fee"],
            InvestigationFee: row["admission_preauth.end_investigation_fee"],
            IcuFee: row["admission_preauth.end_icu_fee"],
            OtFee: row["admission_preauth.end_ot_fee"],
            ConsultationFee: row["admission_preauth.end_consultation_fee"],
            MedicineFee: row["admission_preauth.end_medicine_fee"],
            OtherFee: row['admission_preauth.end_other_fee'],
            BillAmt: row.total_fee,
            FileNo: row['admission_preauth.file_no'],
            ClaimNo: row['admission_preauth.claim_no'],
            Esm: ``,
            Relation: preauth_relation, //need to datamaping with common data
            StayDays: row.stayed_days,

            AlNo: row[`admission_preauth.al_no`],
            AlAmt: row["admission_preauth.al_amt"],
            DiffWithAl: row["admission_preauth.bill_diff_al"],
            BillNo: row["admission_preauth.bill_amt"],
            IpdNo: row["admission_preauth.ipd_no"],
            CoPay: row["admission_preauth.co_pay"],
            Discount: row["admission_preauth.discount"],
            NpAmt: row["admission_preauth.np_amt"],
            Deduction: row["admission_preauth.deduction"],
            IodNo: ``,
            Doctor: mongoDoctor,

            CaseStatus: case_status,
            LastStatus: last_status,
            IsGovtClaim: [117, 91, 92, 86, 64, 79, 101, 73, 66, 119, 96, 78, 102, 105, 118, 80, 67].includes(row.bpa) ? true : false,

            Claim: {
                IsRecieved: claim_final_data.IsRecieved,
                RecievedRemark: claim_final_data.RecievedRemark,
                RecievedDate: claim_final_data.RecievedDate,
                PaidDate: claim_final_data.PaidDate
            },
            ClaimStatus: claim_status_final_doc
        }
        const claimQ = new ClaimModel(currentData);
        claimQ.save();
        console.log("Claim Failed row:", failed_row);
    });
    return { admission, claimsLists };
}
const getDoctor = async () => {
    const doctors = await Doctor.findAll({ raw: true });

    return doctors.reduce((cb, doctor) => {
        (cb[doctor.hos_id] = cb[doctor.hos_id] || []).push(doctor);
        return cb;
    }, {});

}
const getUserDetail = async () => {
    const userObj = await UserBook.find({}, { _id: true, Doctors: true, SqlId: true });
    const UserData = userObj.reduce((cb, user) => {
        const { _id, Doctors, SqlId } = user;


        (cb[user.SqlId] = cb[user.SqlId] || []).push({ id: _id.toString(), Doctors });
        return cb;
    }, {});
    return UserData;
}
const getAdmissionStatus = async (patientId) => {
    const preauth_status = await AdmissionStatus.findAll({
        raw: true,
        where: {
            as_patient: patientId
        },
        order: ['status_id']
    });
    const admission_status = preauth_status.reduce((cb, item) => {
        // if (item.as_patient === 0) return false;
        const { status_id, ...newItem } = item;
        (cb[item.as_patient] = cb[item.as_patient] || []).push(item);
        return cb;
    }, {})
    return admission_status;
}

const IsClaimExist = async () => {
    const mongodbBpa = await ClaimModel.find({}, { "SqlId": 1, "_id": false });
    return mongodbBpa.reduce((object, doc) => {
        object.push(doc.SqlId);
        return object
    }, [])
}
//  claim data  started
const getClaimList = async (preauth_ids) => {
    const claimDb = await ClaimMst.findAll({ raw: true, where: { claim_patient: preauth_ids }, order: ['claim_id'] });
    const claimsLists = claimDb.reduce((cb, claimRow) => {
        (cb[claimRow.claim_patient] = cb[claimRow.claim_patient] || []).push(claimRow);
        return cb;
    }, {});
    const claimIds = claimDb.map(({ claim_id }) => claim_id);
    return { claimsLists, claimIds }
}
const getClaimStatus = async (claim_ids) => {
    const status = await ClaimStatus.findAll({ raw: true, where: { cl_claim: claim_ids } });
    const my_claim_status = status.reduce((cb, claimRow) => {
        (cb[claimRow.cl_claim] = cb[claimRow.cl_claim] || []).push(claimRow);
        return cb;
    }, {});
    const StatusIds = status.map(({ cl_id }) => cl_id);
    return { my_claim_status, StatusIds }
}
const getPayment = async (status_ids) => {
    const pay = await ClaimStatusPayment.findAll({ raw: true, where: { cp_claim: status_ids } });

    const status_payment = pay.reduce((cb, claimRow) => {
        (cb[claimRow.cp_claim] = cb[claimRow.cp_claim] || []).push(claimRow);
        return cb;
    }, {});
    return status_payment
}

