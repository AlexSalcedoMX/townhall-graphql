const { ApolloServer, gql } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    getUsers: [User]
  }
  type User {
    id: ID!
    name: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getUsers: () => ([{ id: '1', name: 'Alex'}, { id: '2', name: 'Emmanuel'}]),
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  playground: false
});

exports.graphqlHandler = server.createHandler();
