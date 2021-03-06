const uuid = require("uuid");
const docClient = require("../utils/docClient");

const createNestedThing = args => {
  const Item = {
    id: uuid.v4(),
    things: args.things
  };
  console.log(JSON.stringify(Item, null, 2));

  // put into dynamodb then return above Item
  return docClient
    .put({
      TableName: "NestedThings",
      Item
    })
    .promise()
    .then(res => Item)
    .catch(error => console.log(error.message));
};

module.exports = createNestedThing;
