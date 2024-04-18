const { DataTypes } = require("sequelize");

const db = require("@/util/sqlcon");
export const Admission = db.define("admission_mst", {
    patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hospital: { type: DataTypes.INTEGER },
    bpa: { type: DataTypes.INTEGER },
    payer: { type: DataTypes.INTEGER },
    patient_tp: { type: DataTypes.INTEGER },
    patient_name: { type: DataTypes.STRING },
    mrd_no: { type: DataTypes.STRING },
    doa: { type: DataTypes.DATEONLY },
    dod: { type: DataTypes.DATEONLY },
    rel_mobile: { type: DataTypes.STRING },
    policy_no: { type: DataTypes.STRING },
    uhid: { type: DataTypes.STRING },
    corp_name: { type: DataTypes.STRING },
    emp_id: { type: DataTypes.STRING },
    investgation_detail: { type: DataTypes.STRING },
    medical_detail: { type: DataTypes.STRING },
    other_fee: { type: DataTypes.STRING },
    total_fee: { type: DataTypes.STRING },
    doctor: { type: DataTypes.TINYINT },

    //al_no: { type: DataTypes.STRING },
    insured: { type: DataTypes.STRING },
    relation: { type: DataTypes.STRING },
    stayed_days: { type: DataTypes.TINYINT },
    ipd_no: { type: DataTypes.STRING },
    bed_no: { type: DataTypes.STRING },
    any_cashless: { type: DataTypes.STRING },
    patient_created: { type: DataTypes.DATE }
}, {
    freezeTableName: true,
    timestamps: false
});



export const AdmissionPreauth = db.define("admission_preauth", {
    preauth_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ap_patient: { type: DataTypes.INTEGER },
    end_doa: { type: DataTypes.DATEONLY },
    end_dod: { type: DataTypes.DATEONLY },
    end_room_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_investigation_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_icu_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_ot_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_consultation_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_medicine_fee: { type: DataTypes.DECIMAL(11, 2) },
    end_other_fee: { type: DataTypes.DECIMAL(11, 2) },
    al_no: { type: DataTypes.STRING },
    claim_no: { type: DataTypes.STRING },
    file_no: { type: DataTypes.DECIMAL(11, 2) },
    al_amt: { type: DataTypes.DECIMAL(11, 2) },
    co_pay: { type: DataTypes.DECIMAL(11, 2) },
    discount: { type: DataTypes.DECIMAL(11, 2) },
    np_amt: { type: DataTypes.DECIMAL(11, 2) },
    deduction: { type: DataTypes.DECIMAL(11, 2) },
    bill_no: { type: DataTypes.STRING },
    ipd_no: { type: DataTypes.STRING },
    bill_amt: { type: DataTypes.DECIMAL(11, 2) },
    bill_diff_al: { type: DataTypes.DECIMAL(11, 2) }
}, {
    freezeTableName: true,
    timestamps: false
});

export const AdmissionStatus = db.define("admission_status", {
    status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    as_patient: { type: DataTypes.INTEGER },
    status_bill_amt: { type: DataTypes.DECIMAL(11, 2) },
    last_status: { type: DataTypes.INTEGER },
    status_attachment: { type: DataTypes.STRING },
    status_remarks: { type: DataTypes.STRING },
    status_created: { type: DataTypes.DATE }
}, {
    freezeTableName: true,
    timestamps: false
});

export const ClaimMst = db.define('claim_mst', {
    claim_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    claim_patient: { type: DataTypes.INTEGER },
    claim_recieved: { type: DataTypes.ENUM('0', '1') },
    // last_status: { type: DataTypes.INTEGER },
    recieve_date: { type: DataTypes.DATE },
    recieve_remark: { type: DataTypes.STRING },
    parent_id: { type: DataTypes.INTEGER },
    paid_date: { type: DataTypes.DATEONLY },
    claim_created: { type: DataTypes.DATE }
}, {
    freezeTableName: true,
    timestamps: false
});

export const ClaimStatus = db.define('claim_status', {
    cl_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cl_claim: { type: DataTypes.INTEGER },
    cl_status: { type: DataTypes.INTEGER },
    cl_remarks: { type: DataTypes.STRING },
    cl_nmi: { type: DataTypes.INTEGER },
    cl_attachment: { type: DataTypes.STRING },
    cl_created: { type: DataTypes.DATEONLY },
}, {
    freezeTableName: true,
    timestamps: false
});



export const ClaimStatusPayment = db.define('claim_payment', {
    cp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cp_claim: { type: DataTypes.INTEGER },
    cp_status: { type: DataTypes.INTEGER },
    cp_pod_no: { type: DataTypes.STRING },
    cp_pod_date: { type: DataTypes.DATE },
    cp_utr_no: { type: DataTypes.STRING },
    cp_utr_date: { type: DataTypes.DATE },
    cp_utr_amt: { type: DataTypes.DECIMAL(11, 2) },
    cp_point: { type: DataTypes.DECIMAL(11, 2) },
    cp_tds: { type: DataTypes.DECIMAL(11, 2) },
    cp_np: { type: DataTypes.DECIMAL(11, 2) },
    cp_co_pay: { type: DataTypes.DECIMAL(11, 2) },
    cp_deduction: { type: DataTypes.DECIMAL(11, 2) },
    cp_discount: { type: DataTypes.DECIMAL(11, 2) },
    cp_os: { type: DataTypes.DECIMAL(11, 2) },
    cp_approve_diff: { type: DataTypes.DECIMAL(11, 2) },
    cp_pay_created: { type: DataTypes.DATE },
}, {
    freezeTableName: true,
    timestamps: false
});