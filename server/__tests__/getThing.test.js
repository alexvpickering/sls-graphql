import axios from "axios";
import gql from "graphql-tag";

it("gets a thing", () => {
  const variables = { id: "1" };
  const query = gql`
    query GetThing($id: ID!) {
      getThing(id: $id) {
        two
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
      expect(res.data.data).toMatchSnapshot();
    });
});
