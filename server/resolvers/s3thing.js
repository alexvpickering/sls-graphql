const { s3, Bucket } = require("../utils/s3");

const s3thing = obj => {
  console.log(obj);
  return s3
    .getObject({
      Bucket,
      Key: `s3thing${obj.id}.json`
    })
    .promise()
    .then(data => data.Body.toString("utf-8"))
    .catch(error => console.log(error.message));
};

module.exports = s3thing;
