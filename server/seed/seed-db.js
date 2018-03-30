const docClient = require("../utils/docClient");

const insertItem = (TableName, Item) => {
  docClient
    .put({
      TableName,
      Item
    })
    .promise()
    .then(data => console.log("Insert Success:", TableName))
    .catch(error => console.log(error.message));
};

// seed Things table
const things = [
  { id: "1", one: "thing 1", two: "thing 2" },
  { id: "2", one: "thing 1 two", two: "thing 2 two" },
  { id: "3", one: "thing 1 three", two: "thing 2 three" }
];

things.forEach(Item => insertItem("Things", Item));

// seed NestedThings table
const nestedThings = [
  {
    id: "1",
    things: [
      { id: "1", one: "thing 1", two: "thing 2" },
      { id: "2", one: "thing 1 two", two: "thing 2 two" }
    ]
  }
];

nestedThings.forEach(Item => insertItem("NestedThings", Item));
