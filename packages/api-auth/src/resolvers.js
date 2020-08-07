// Get data
const users = require('../data/users.json');

// Resolvers definition
const resolvers = {
  Query: {
    allUsers: () => {
      return users;
    },
  },
  Mutation: {},
};

module.exports = resolvers;
