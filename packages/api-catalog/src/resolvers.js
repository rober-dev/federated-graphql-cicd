// Custom libs
const { greeting } = require('@federated-graphql-cicd/api-common/src');

// Get data
const brands = require('../data/brands');
const products = require('../data/products');

// Resolvers definition
const resolvers = {
  Query: {
    allBrands: () => {
      return brands;
    },
    brandById: (_, { id }) => {
      return brands.find((b) => b.id == id);
    },
    allProducts: () => {
      return products;
    },
    productById: (_, { id }) => {
      return products.find((p) => p.id === id);
    },
    greetingCatalog: (_, { name }) => {
      return greeting(name);
    },
  },
  Mutation: {},
};

module.exports = resolvers;
