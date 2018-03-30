require("babel-polyfill");
// prettier-ignore
const lambdaPlayground = require("graphql-playground-middleware-lambda").default;
const { graphqlLambda, graphiqlLambda } = require("apollo-server-lambda");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const fs = require("fs");
const schema = fs.readFileSync("schema.graphql", "utf8");

const myGraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  logger: console
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  // adds CORS then returns output
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers["Access-Control-Allow-Origin"] = "*";
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: myGraphQLSchema, tracing: false });
  return handler(event, context, callbackFilter);
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT
    ? process.env.REACT_APP_GRAPHQL_ENDPOINT
    : "/production/graphql"
});

exports.graphiqlHandler = graphiqlLambda({
  endpointURL: process.env.REACT_APP_GRAPHQL_ENDPOINT
    ? process.env.REACT_APP_GRAPHQL_ENDPOINT
    : "/production/graphql"
});
