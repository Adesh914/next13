import claimMst from "../models/sql/claim-model";
import commonData from "../app/api/sql/common-data.json";
import hospitalModel from "../models/sql/user-book";
import bpaModel from "../models/sql/bpa-model";

const statusCollection = () => {
    const status_array = [...commonData.preauth_status, ...commonData.claim_status]
    const status_payment = status_array.reduce((cb, statusRow) => {
        const { Id, Name } = statusRow;
        (cb[statusRow.Id] = cb[statusRow.Id] || []).push({ Id, Name });
        return cb;
    }, {});
    return status_payment;
}
const hospital_list = async () => {
    const userData = await hospitalModel.find({});
    const userDataset = userData.reduce((cb, statusRow) => {
        const { _id, Hospital } = statusRow;
        (cb[statusRow._id.toString()] = cb[statusRow._id.toString()] || []).push({ shortName: statusRow.Hospital.ShortName });
        return cb;
    }, {});
    return userDataset;
};
const bpa_list = async () => {
    const bpaData = await bpaModel.find({});
    const userDataset = bpaData.reduce((cb, statusRow) => {
        (cb[statusRow._id.toString()] = cb[statusRow._id.toString()] || []).push({ shortName: statusRow.BpaCode });
        return cb;
    }, {});
    return userDataset;
};
const allstatus = statusCollection();
const dashboardResolver = {
    ClaimStatusCount: {
        StatusData: async (parentData, { statusid }, context, info) => {

            if (parentData._id.LastStatus)
                return allstatus[parentData._id.LastStatus];
            else
                return [{ Id: 'other', Name: "Other" }]
        }
    },
    ClaimMst: {

        Hospital: async (parent, { }, context, info) => {
            const HospitalDataset = await hospital_list();
            // console.log(HospitalDataset)
        }
    },
    // casestatus_bpa: {
    //     statusData: async (parent, { }, context, info) => {
    //         // console.log(parent.bpalist)
    //         let laststatus = [];
    //         let bpadata = [];
    //         let series = [];
    //         parent.data.map(({ _id, Count }) => {
    //             !laststatus.includes(allstatus[_id.LastStatus][0].Name) ? laststatus.push(allstatus[_id.LastStatus][0].Name) : true;

    //             // console.log(Object.keys(allstatus));
    //             const [bd] = parent.bpalist[_id.Bpa];
    //             // console.log(bd.shortName, `/${allstatus[_id.LastStatus][0].Name}/`, Count);
    //             !bpadata.includes(bd.shortName) ? bpadata.push(bd.shortName) : true;
    //             series.push({
    //                 bpa_name: bd.shortName,
    //                 Status_name: allstatus[_id.LastStatus][0].Name,
    //                 count: Count
    //             })
    //             // console.log(bd.shortName, `/${allstatus[_id.LastStatus][0].Name}/`, Count);
    //             // console.log("=============================================================");

    //         });
    //         console.log(parent.data, series)
    //     }
    // },
    Query: {
        StatusCounter: async (parent, args) => {
            const { userId } = args;

            const data = await claimMst.aggregate([
                { $match: userId ? { Hospital: userId } : {} },
                {
                    $group: {
                        _id: { LastStatus: "$LastStatus" },
                        Count: { $sum: 1 }
                    }
                }
            ]);

            return data;
        },
        claimDrilldown: async (_, args) => {

            const data = await claimMst.aggregate([
                {
                    $group: {
                        _id: "$Hospital",
                        claimMst: { $push: "$Bpa" },
                        Bpa: {
                            $addToSet: {
                                BpaId: '$Bpa',
                                Count: "$Bpa.count"
                            },

                        },
                        // Count: "$Bpa.count",
                        Count: { $sum: 1 }
                    },



                }
                // ,
                // {
                //     $addFields:
                //     {
                //         totalBpa: { $sum: 1 }
                //     }
                // }
            ]);
            // https://www.geeksforgeeks.org/count-occurrences-of-all-items-in-an-array-in-javascript/
            return data;
        },
        // user only for user dashboard
        userBpaStatus: async (_, args) => {
            const { userId } = args;
            const bpalist = await bpa_list();
            const data = await claimMst.aggregate([
                { $match: { Hospital: userId } },
                {
                    $group: {
                        _id: { Bpa: "$Bpa", LastStatus: "$LastStatus", },
                        Count: { $sum: 1 }
                    }
                }
            ]);
            let series = [];
            data.map(({ _id, Count }) => {
                const [bd] = bpalist[_id.Bpa];
                series.push({
                    Bpa: bd.shortName,
                    Status: allstatus[_id.LastStatus][0].Name,
                    Count
                })
            });

            return series;
        },
    }
}
module.exports = dashboardResolver;