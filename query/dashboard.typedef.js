import { gql } from "graphql-tag";

const typeDefs = gql`
#Admin Dashboard
    type ClaimStatusCount{
        id: ID
        StatusData(statusId: String):[status_data]
        Count: Int       
    }
    type status_data{
        Id: String
        Name: String
    }

    type ClaimMst{
        Hospital:[hospital_type]
        Bpa:[bpa_type]
    }
type hospital_type{
    Name:String
    Count:Int
    CaseCount:Int
}

type bpa_type{
    Name:String
    Count:Int
    CaseCount:Int
}
    type Query{
        StatusCounter:[ClaimStatusCount]
        claimDrilldown:[ClaimMst]
    }
`;
module.exports = typeDefs;