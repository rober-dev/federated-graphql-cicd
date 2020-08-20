// Vendor libs
const { ApolloServer } = require('apollo-server-express');
const { buildFederatedSchema } = require('@apollo/federation');

// Get environment variables
require('dotenv').config();

// Environment variables declaration
const { PORT, API_NAME, NODE_ENV } = process.env;
const express = require('express');

// Custom libs
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const run = async () => {
  // Apollo server setup
  const apolloServer = new ApolloServer({
    port: PORT,
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    context: async ({ req, res }) => {
      return { req, res };
    }
  });

  // Add express
  const app = express();

  // Routes
  app.get('/healthcheck', (req, res) => {
    res.json('ok');
  });

  // Apollo middlewares
  apolloServer.applyMiddleware({ app });

  // Start server
  app.listen({ port: PORT }, () => {
    console.log(
      `${API_NAME} Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
  });
};

// ---------------------------------------------------
// START SERVER
// ---------------------------------------------------
try {
  run();
} catch (e) {
  console.error(
    `Error starting ${API_NAME} on ${NODE_ENV} mode`,
    e.message,
    e.stack
  );
}
