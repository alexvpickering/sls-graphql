import docClient from "../utils/docClient";

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
    .catch(err => console.log(err));
};

export default getNestedThing;
