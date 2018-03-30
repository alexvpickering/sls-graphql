const getThing = require("./resolvers/getThing");
const getNestedThing = require("./resolvers/getNestedThing");
const createThing = require("./resolvers/createThing");
const updateThing = require("./resolvers/updateThing");
const createNestedThing = require("./resolvers/createNestedThing");
const s3thing = require("./resolvers/s3thing");

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    getThing: (root, args) => getThing(args),
    getNestedThing: (root, args) => getNestedThing(args)
  },
  Mutation: {
    createThing: (root, args) => createThing(args),
    createNestedThing: (root, args) => createNestedThing(args),
    updateThing: (root, args) => updateThing(args)
  },
  Thing: {
    s3thing: obj => s3thing(obj)
  }
};

module.exports = resolvers;
