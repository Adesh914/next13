import claimMst from "../../sql/claim-model";
const dashboardResolver = {
    Query: {
        StatusCounter: async (parent, args) => {
            const data = await claimMst.aggregate([
                {
                    $group: {
                        _id: { LastStatus: "$LastStatus" },
                        Count: { $sum: 1 }
                    }
                }
            ]);

            return data;
        }
    }
}
module.exports = dashboardResolver;