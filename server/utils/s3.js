const AWSXRay = require("aws-xray-sdk");
const AWS = AWSXRay.captureAWS(require("aws-sdk"));

let s3;

if (process.env.NODE_ENV === "production") {
  s3 = new AWS.S3();
} else {
  // local stack s3
  s3 = new AWS.S3({
    endpoint: "http://localhost:4572",
    s3ForcePathStyle: true
  });
}

export const Bucket = "serverless-thing-files";
export default s3;
