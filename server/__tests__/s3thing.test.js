const axios = require("axios");
const gql = require("graphql-tag");

it("gets a s3thing", () => {
  const variables = { id: "1" };
  const query = gql`
    query GetThing($id: ID!) {
      getThing(id: $id) {
        one
        two
        s3thing
      }
    }
  `;

  return axios
    .post("http://localhost:4000/graphql", {
      query,
      variables
    })
    .then(res => {
      const data = res.data.data.getThing;

      expect(res.status).toBe(200);
      expect(typeof data.s3thing).toBe("string");
    });
});
