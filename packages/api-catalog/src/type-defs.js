// Vendor libs
const { gql } = require('apollo-server-express');

// Type definitions
module.exports = gql`
  type Brand {
    id: ID!
    name: String!
    url: String
  }

  type Product {
    id: ID!
    name: String!
    price: Float
  }

  extend type Query {
    allBrands: [Brand!]!
    brandById(id: ID!): Brand
    allProducts: [Product]!
    productById(id: ID!): Product
    greetingCatalog(name: String): String
  }
`;
