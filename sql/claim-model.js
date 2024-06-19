import mongoose from "mongoose";
const sequencing = require("../db/models/counterModel");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const ClaimMst = new Schema({
    PatientName: {
        type: String,
        // required: [true, " can't be blank"],
        // trim: true
    },
    SqlId: { type: Number },
    Hospital: {
        type: String
    },
    Bpa: {
        type: String
    },
    Payer: {
        type: String
    },
    Mrd: {
        type: String
    },
    Doa: {
        type: Date
    },
    Dod: {
        type: Date
    },
    MobileNo: {
        type: String
    },
    Policy: {
        type: String
    },
    Uhid: {
        type: String
    },
    CorporateName: {
        type: String
    },
    EmpId: {
        type: String
    },
    TreatmentDesc: {
        type: String
    },
    CaseId: { type: Number },
    DocAttached: { type: String },
    RoomFee: { type: Number },
    InvestigationFee: { type: Number },
    IcuFee: { type: Number },
    OtFee: { type: Number },
    ConsultationFee: { type: Number },
    MedicineFee: { type: Number },
    OtherFee: { type: Number },
    BillAmt: {
        type: Number
    },
    FileNo: { type: String },
    ClaimNo: { type: String },
    Esm: { type: String },
    Relation: { type: String },
    StayDays: { type: Number },

    AlNo: { type: String },
    AlAmt: { type: Number },
    DiffWithAl: { type: Number },
    BillNo: { type: String },
    IpdNo: { type: String },
    CoPay: { type: Number },
    Discount: { type: Number },
    NpAmt: { type: Number },
    Deduction: { type: Number },
    IdNo: { type: String },
    Doctor: {
        type: String
    },
    Type: { type: String },
    CaseStatus: [{
        Status: String,
        StatusBillAmt: Number,
        StatusDesc: String,
        StatusDoc: String,
        StatusDate: { type: Date, default: Date.now }
    }],
    Claim: {
        IsRecieved: Boolean,
        RecievedRemark: String,
        RecievedDate: { type: Date },  //, default: Date.now
        PaidDate: { type: Date }
    },
    ClaimStatus: [{
        Status: String,
        StatusDesc: String,
        StatusDoc: String,
        StatusDate: { type: Date, default: Date.now },
        Payment: [{
            PodNo: String,
            DeliveryDate: { type: Date },
            PodDate: { type: Date },
            UtrNo: String,
            UtrDate: { type: Date },
            UtrAmt: Number,
            Point: Number,
            Tds: Number,
            Np: Number,
            CoPay: Number,
            Deduction: Number,
            Discount: Number,
            Os: Number,
            ApproveDiff: Number,
            PayDate: { type: Date, default: Date.now }
        }]
    }],
    LastStatus: String,
    IsGovtClaim: Boolean
    // UpdatedAt: { type: Date, default: Date.now },
    // CreatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

ClaimMst.pre("save", async function (next) {
    if (!this.isNew) return;
    this.CaseId = await sequencing.getSequenceNextValue("CaseId");
    next();
});
export default mongoose.models.ClaimMst || mongoose.model('ClaimMst', ClaimMst);