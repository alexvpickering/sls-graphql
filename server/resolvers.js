import getThing from "./resolvers/getThing";
import createThing from "./resolvers/createThing";

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getThing: (root, args) => getThing(args),
    hello: (root, args) => "Hi from graphql"
  },
  Mutation: {
    createThing: (root, args) => createThing(args)
  }
};
