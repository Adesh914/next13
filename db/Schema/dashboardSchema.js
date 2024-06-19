
import { gql } from "graphql-tag";

const typeDefs = gql`
#Admin Dashboard
    type ClaimStatusCount{
        id: ID
        Status: String
        Count: Int
    }
    type Query{
        StatusCounter:[ClaimStatusCount]
    }
`;
module.exports = typeDefs;