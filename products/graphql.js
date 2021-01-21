const { ApolloServer, gql } = require('apollo-server-lambda');
const { buildFederatedSchema } = require('@apollo/federation');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    getProduct: Product
  }
  type Product {
    id: ID!
    name: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    getProduct: () => ({ id: '100', name: 'Modelo Especial'}),
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

exports.graphqlHandler = server.createHandler();
