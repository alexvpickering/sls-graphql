import docClient from "../utils/docClient";

const getThing = args => {
  return docClient
    .get({
      TableName: "Things",
      Key: {
        id: args.id
      }
    })
    .promise()
    .then(res => res.Item)
    .catch(err => console.log(err));
};

export default getThing;
