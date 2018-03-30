const docClient = require("../utils/docClient");

const getNestedThing = args => {
  return docClient
    .get({
      TableName: "NestedThings",
      Key: {
        id: args.id
      }
    })
    .promise()
    .then(res => res.Item)
    .catch(error => console.log(error.message));
};

module.exports = getNestedThing;
