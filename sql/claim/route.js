import { Admission, AdmissionPreauth, AdmissionStatus, ClaimMst } from "@/models/sql/PreauthModel";
import { Doctor } from "@/models/sql/HospitalModel";
import { NextResponse, NextRequest } from "next/server";
import { where } from "sequelize";
import { connectDb } from "@/util/connect";
import UserBook from "@/models/sql/user-book";
import BpaModel from "@/models/sql/bpa-model";
import ClaimModel from "@/models/sql/claim-model";

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
        const preauthData = await Admission.findAll({ raw: true, include: [AdmissionPreauth], offset: 0, limit: 20 });

        const admission_ids = preauthData.map(({ patient_id }) => patient_id)
        console.log(admission_ids)
        // const UserData = await getUserDetail();
        const { admission, ad_status } = await InsertClaim(preauthData, admission_ids, BpaData);
        return NextResponse.json({ message: "success", data: admission })
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
    let ad_status = await getAdmissionStatus(fk_status_array);
    let claimsLists = await getClaimList(fk_status_array); console.log(claimsLists)
    const doctorData = await getUserDetail();
    const sqlDoctor = await getDoctor();
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
            case_status = ad_status[sql_id].map(({ last_status, status_bill_amt, status_remarks, status_attachment, status_created }) => (
                {
                    "Status": last_status,
                    "StatusBillAmt": status_bill_amt,
                    "StatusDesc": status_remarks,
                    "StatusDoc": status_attachment,
                    "StatusDate": status_created
                })
            );
        }

        const last_status = case_status.length ? case_status[case_status.length - 1]['Status'] : ``;
        // console.log("case_status:", case_status.length ? case_status[case_status.length - 1]?.['Status'] : `Not available`)

        //  claim Data start

        const claim_data = claimsLists?.[sql_id];
        if (claim_data.length > 1) {

        } else if (claim_data.length == 1) {

        }
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
            Relation: row.relation, //need to datamaping with common data
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

            Claim: {
                IsRecieved: ``,
                RecievedRemark: ``,
                RecievedDate: ``,
                PaidDate: ``
            },
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
        const { _id, Doctors, SqlId } = user; //console.log("newuser:", newuser)


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
const getClaimList = async (preauth_ids) => {
    const claimDb = await ClaimMst.findAll({ raw: true, where: { claim_patient: preauth_ids }, order: ['claim_id'] });
    return claimDb.reduce((cb, claimRow) => {
        (cb[claimRow.claim_patient] = cb[claimRow.claim_patient] || []).push(claimRow);
        return cb;
    }, {});
}
const IsClaimExist = async () => {
    const mongodbBpa = await ClaimModel.find({}, { "SqlId": 1, "_id": false });
    return mongodbBpa.reduce((object, doc) => {
        object.push(doc.SqlId);
        return object
    }, [])
}

