import getThing from './resolvers/getThing';

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getThing: (root, args) => getThing(args),
    hello: (root, args) => 'Hi from graphql',
  },
};
