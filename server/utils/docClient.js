import dynamodb from "serverless-dynamodb-client";
const AWSXRay = require("aws-xray-sdk");
const AWS = AWSXRay.captureAWS(require("aws-sdk"));

let docClient;

if (process.env.NODE_ENV === "production") {
  docClient = new AWS.DynamoDB.DocumentClient();
} else {
  docClient = dynamodb.doc;
}

export default docClient
