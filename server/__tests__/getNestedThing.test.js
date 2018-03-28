import axios from "axios";
import gql from "graphql-tag";
const NestedThings = require("../seed-data/NestedThings");

it("gets a nested thing", () => {
  const variables = { id: "1" };
  const query = gql`
    query GetNestedThing($id: ID!) {
      getNestedThing(id: $id) {
        id
        things {
          id
          one
          two
        }
      }
    }
  `;

  return axios
    .post("http://localhost:4000/graphql", {
      query,
      variables
    })
    .then(res => {
      expect(res.data.data.getNestedThing).toEqual(NestedThings[0]);
      expect(res.status).toBe(200);
    });
});
