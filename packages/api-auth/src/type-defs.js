// Vendor libs
const { gql } = require('apollo-server-express');

// Type definitions
module.exports = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    firstName: String
    lastName: String
  }

  extend type Query {
    allUsers: [User!]!
  }
`;
