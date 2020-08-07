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
  },
  Mutation: {},
};

module.exports = resolvers;
