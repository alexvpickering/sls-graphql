import uuid from "uuid";
import docClient from "../utils/docClient";

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
    .catch(err => console.log(err));
};

export default createThing;
