import ExcelJS from "exceljs";
import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/util/connect";
import ClaimModel from "@/models/sql/claim-model";
export async function GET(req) {
    await connectDb();


    var workbook1 = new ExcelJS.Workbook();
    workbook1.creator = 'Me';
    workbook1.lastModifiedBy = 'Me';
    workbook1.created = new Date();
    workbook1.modified = new Date();
    var sheet1 = workbook1.addWorksheet('Adesh kumar', {
        headerFooter: { firstHeader: "Hello Exceljs", firstFooter: "Hello World" }
    });
    // var reHeader = ['FirstName', 'LastName', 'Other Name'];
    var reColumns = [
        { header: 'Case ID', key: `CaseId` },
        { header: 'BPA Type', key: `BpaType` },
        { header: 'Hospital', key: 'Hospital' },
        { header: 'Insurer', key: 'Insurer' },
        { header: 'BPA Name', key: 'BpaName' },
        { header: 'AL Number', key: 'AlNo' },
        { header: 'Claim Number', key: 'ClaimNo' },
        { header: 'File Number', key: 'FileNo' },
        { header: 'ID No', key: 'IdNo' },
        { header: 'Policy', key: 'Policy' },
        { header: 'Patient', key: 'PatientName' },
        { header: 'D.O.A', key: 'Doa' },
        { header: 'D.O.D', key: 'Dod' },
        { header: 'IPD Number', key: 'IpdNo' },
        { header: 'Bill No', key: `BillNo` },
        { header: 'Bill Date', key: `BillDate` },
        { header: 'PA Amount', key: 'PaAmt' },
        { header: 'Bill Amount', key: 'BillAmt' },
        { header: 'AL Amount', key: 'AlAmt' },
        { header: 'Status', key: 'Status' },
        { header: 'UTR Number', key: 'UtrNo' },
        { header: 'UTR Date', key: 'UtrDate' },
        { header: 'UTR Amount', key: 'UtrAmt' },
        { header: 'TDS', key: 'Tds' },
        { header: 'Discount', key: 'Discount' },
        { header: 'Co Payment', key: 'CoPay' },
        { header: 'NP', key: 'Np' },
        { header: 'Deduction', key: 'Deduction' },
        { header: 'Deduction Reason', key: 'DeductionReson' },
        { header: 'Diff with AL', key: 'DiffWithAl' },
        { header: 'Bill Received Date', key: 'RecievedDate' },
        { header: 'Delivery Date', key: 'DeliveryDate' },
        { header: 'Last Update', key: 'updatedAt' },
        { header: 'TBO Bill', key: 'TboBill' }
    ];
    const exl = await dataSource();

    sheet1.columns = reColumns;
    sheet1.addRows(exl);
    // sheet1.columns = rows
    // workbook1.xlsx.writeFile("./error.xlsx").then(function () {
    //     console.log("xlsx file is written.");
    // });

    // buffer writing
    const buffers = await workbook1.xlsx.writeBuffer();
    // let pdfData = Buffer.concat(buffers);
    /*  NextResponse.writeHead(200, {
          'Content-Length': Buffer.byteLength(buffers),
          'Content-Type': 'application/octet-stream',
          'Content-disposition': 'attachment;filename=MySheet.xlsx',
      })
          .end(buffers);
      return NextResponse.json({ success: true }, { status: 200 })  */
    // set the headers to tell the browser to download the file
    const headers = new Headers();
    // remember to change the filename `test.pdf` to whatever you want the downloaded file called
    headers.append("Content-Disposition", 'attachment; filename="test.xlsx"');
    headers.append("Content-Type", "application/octet-stream");

    return new Response(buffers, {
        headers,
    });
}

const dataSource = async () => {
    const cm = await ClaimModel.find({});
    return cm.map(pd => {
        if (!pd.Claim.IsRecieved) return false;
        let bpatype = ``;
        let bpa_name = ``;

        let downloadData = {
            "CaseId": pd.CaseId,
            "BpaType": bpatype,
            "Hospital": pd.Hospital,
            "Insurer": pd.Insurer,
            "BpaName": bpa_name,
            "AlNo": pd.AlNo,
            "ClaimNo": pd.ClaimNo,
            "FileNo": pd.FileNo,
            "IdNo": pd.IdNo,
            "Policy": pd.Policy,
            "PatientName": pd.PatientName,
            "Doa": pd.Doa,
            "Dod": pd.Dod,
            "IpdNo": pd.IpdNo,
            "BillNo": pd.BillNo,
            "BillDate": `NOT Avaliable`,
            "PaAmt": `NOT Avaliable`,
            "BillAmt": pd.BillAmt,
            "AlAmt": pd.AlAmt,
            "Status": pd.LastStatus,
            "UtrNo": pd.UtrNo,
            "UtrDate": pd.UtrDate,
            "UtrAmt": pd.UtrAmt,
            "Tds": pd.ClaimStatus?.Payment?.Tds,
            "Discount": pd.ClaimStatus?.Payment?.Discount,
            "CoPay": pd.ClaimStatus?.Payment?.CoPay,
            "Np": pd?.ClaimStatus?.Payment?.Np,
            "Deduction": pd?.ClaimStatus?.Payment?.Np,
            "DeductionReson": ``,
            "DiffWithAl": pd.DiffWithAl,
            "RecievedDate": pd.RecievedDate,
            "DeliveryDate": pd?.ClaimStatus?.Payment?.DeliveryDate,
            "updatedAt": pd.updatedAt,
            "TboBill": ``
        };


        return downloadData
    })
}