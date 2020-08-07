// Custom libs
const { greeting } = require('@federated-graphql-cicd/api-common/src');

// Get data
const users = require('../data/users.json');

// Resolvers definition
const resolvers = {
  Query: {
    allUsers: () => {
      return users;
    },
    greetingAuth: (_, { name }) => {
      return greeting(name);
    }
  },
  Mutation: {}
};

module.exports = resolvers;
