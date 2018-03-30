import docClient from "../utils/docClient";

const updateThing = args => {
  const expAtrVals = {};
  let upExp = "SET";

  // to check if adding comma
  const last = Object.keys(args).length - 1;

  Object.entries(args).forEach(([key, val], ind) => {
    if (key === "id") return;

    // add to UpdateExpression
    upExp = `${upExp} ${key} = :${key}${ind === last ? "" : ", "}`;

    // add to ExpressionAttributeValues
    expAtrVals[`:${key}`] = val;
  });

  return docClient
    .update({
      TableName: "Things",
      Key: { id: args.id },
      UpdateExpression: upExp,
      ConditionExpression: "attribute_exists(id)",
      ExpressionAttributeValues: expAtrVals,
      ReturnValues: "ALL_NEW"
    })
    .promise()
    .then(res => res.Attributes)
    .catch(error => console.log(error.message));
};

export default updateThing;
