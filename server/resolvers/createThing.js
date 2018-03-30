const uuid = require("uuid");
const docClient = require("../utils/docClient");

const createThing = args => {
  console.log(args);
  const Item = {
    id: uuid.v4(),
    one: args.one,
    two: args.two
  };

  // put into dynamodb then return above Item
  return docClient
    .put({
      TableName: "Things",
      Item
    })
    .promise()
    .then(res => Item)
    .catch(error => console.log(error.message));
};

module.exports = createThing;
