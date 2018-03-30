// fix for xray local
process.env.AWS_XRAY_CONTEXT_MISSING = "LOG_ERROR";

const AWSXRay = require("aws-xray-sdk");
const AWS = AWSXRay.captureAWS(require("aws-sdk"));

let docClient;

if (process.env.NODE_ENV === "production") {
  docClient = new AWS.DynamoDB.DocumentClient();
} else {
  docClient = new AWS.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000"
  });
}

module.exports = docClient;
