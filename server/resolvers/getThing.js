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
    .catch(error => console.log(error.message));
};

export default getThing;
