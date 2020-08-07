// Vendor libs
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Apollo libs
const { ApolloServer } = require('apollo-server-express');
const { ApolloGateway } = require('@apollo/gateway');

// Load environment variables
dotenv.config();

// Assign environment variables
const PORT = parseInt(process.env.PORT || 4000, 10);
const { API_NAME } = process.env || 'API';
const { NODE_ENV } = process.env || 'development';
const API_AUTH = process.env.API_AUTH || 'http://localhost:4001';
const API_CATALOG = process.env.API_CATALOG || 'http://localhost:4002';
const WEB = process.env.WEB || 'http://localhost:3000';

// -----------------------------------------
// Apollo Gateway
// -----------------------------------------
const apolloGateway = new ApolloGateway({
  port: PORT,
  serviceList: [
    { name: 'api-auth', url: `${API_AUTH}/graphql` },
    { name: 'api-catalog', url: `${API_CATALOG}/graphql` },
  ],
});

// -----------------------------------------
// Apollo Server setup
// -----------------------------------------
const run = async () => {
  // Load APIs
  const { schema, executor } = await apolloGateway.load();
  // Setup Apollo Server
  const apolloServer = new ApolloServer({
    schema,
    executor,
    tracing: true,
    subscriptions: false, // There is not subscriptions on Apollo Federation
    engine: false,
    context: async ({ req, res }) => {
      return {
        req,
        res,
      };
    },
  });

  // Apply Express middleware to Apollo
  const app = express();

  // Express middlewares
  app.use(bodyParser.json());

  // Setup cors
  const corsOptions = {
    credentials: true,
    origin: [WEB],
  };
  app.use(cors(corsOptions));

  // Apply Express middleware to Apollo
  apolloServer.applyMiddleware({ app, cors: corsOptions });

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 ${API_NAME} ready at http://localhost:${PORT}${apolloServer.graphqlPath} on ${NODE_ENV} mode`
    )
  );
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
