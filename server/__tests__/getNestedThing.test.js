const axios = require("axios");
const gql = require("graphql-tag");

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
      expect(res.status).toBe(200);
      expect(res.data.data.getNestedThing).toMatchSnapshot();
    });
});
