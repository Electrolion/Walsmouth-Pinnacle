const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;
