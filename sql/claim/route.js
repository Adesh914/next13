import { Admission, AdmissionPreauth, AdmissionStatus } from "@/models/sql/PreauthModel";
import { NextResponse, NextRequest } from "next/server";
import { where } from "sequelize";
// Admission.hasOne(AdmissionPreauth);
// AdmissionPreauth.belongsTo(Admission, { foreignKey: "patient_id" });
Admission.hasOne(AdmissionPreauth, { foreignKey: "ap_patient" });
AdmissionPreauth.belongsTo(Admission, { foreignKey: "preauth_id" });
export async function GET(req, res) {
    const name = req.nextUrl.searchParams.get('name');
    const preauthData = await Admission.findAll({ raw: true, include: [AdmissionPreauth], offset: 0, limit: 2 });

    const admission_ids = preauthData.map(({ patient_id }) => patient_id)
    console.log(admission_ids)

    InsertClaim(preauthData, admission_ids);
    return NextResponse.json({ message: "success", data: preauthData })
}

const InsertClaim = async (admission, fk_status_array) => {
    const ad_status = await getAdmissionStatus(fk_status_array);

    admission.forEach(row => {
        // const ad_status = getAdmissionStatus(row.patient_id);
        // console.log(ad_status)
    });
    const currentData = {

    }
}

const getAdmissionStatus = async((patientId) => {
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
        (cb[item.as_patient] = cb[item.as_patient] || []).push(newItem);
        return cb;
    }, {})
    return admission_status;
})

