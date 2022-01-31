require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const logger = require("./lib/logger");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const init = async () => {
  const { url } = await server.listen();
  logger.info(`Server running on ${url}`);
};

init();
