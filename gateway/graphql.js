const { ApolloServer } = require('apollo-server-lambda');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'user', url: 'http://localhost:4000/local/graphql' },
    { name: 'products', url: 'http://localhost:4001/local/graphql'}
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

exports.graphqlHandler = server.createHandler();
