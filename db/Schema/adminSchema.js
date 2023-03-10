import { gql } from "graphql-tag";

const typeDefs = gql`
     #AdminBook
    type AdminBook{
        id: ID
        FullName: String
        DisplayName: String
        UserName: String
        Password: String
        ThumbImage: String
    }

    input AdminInsert {
        FullName: String
        DisplayName: String
        UserName: String!
        Password: String!
        ThumbImage: String
    }

    type Query{
        getAdminUsers: [AdminBook]
        getAdminUser(id:ID):AdminBook
    }

    type Mutation{
        newAdmin(input: AdminInsert): AdminBook
    }
`


module.exports = typeDefs;