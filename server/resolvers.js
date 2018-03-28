import getThing from "./resolvers/getThing";
import getNestedThing from "./resolvers/getNestedThing";
import createThing from "./resolvers/createThing";
import updateThing from "./resolvers/updateThing";
import createNestedThing from "./resolvers/createNestedThing";

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getThing: (root, args) => getThing(args),
    getNestedThing: (root, args) => getNestedThing(args)
  },
  Mutation: {
    createNestedThing: (root, args) => createNestedThing(args),
    updateThing: (root, args) => updateThing(args)
  }
};
