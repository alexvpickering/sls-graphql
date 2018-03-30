// fix for xray local
process.env.AWS_XRAY_CONTEXT_MISSING = "LOG_ERROR";

const AWSXRay = require("aws-xray-sdk");
const AWS = AWSXRay.captureAWS(require("aws-sdk"));

let s3;

if (process.env.NODE_ENV === "production") {
  s3 = new AWS.S3();
} else {
  // local stack s3
  s3 = new AWS.S3({
    endpoint: "http://localhost:4569",
    s3ForcePathStyle: true
  });
}

module.exports = {
  Bucket: "serverless-thing-files",
  s3: s3
};
