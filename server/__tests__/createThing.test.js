import axios from "axios";
import gql from "graphql-tag";

it("creates a thing", async () => {
  const variables = {
    one: "thing1",
    two: "thing2"
  };

  const query = gql`
    mutation CreateThing($one: String, $two: String) {
      createThing(one: $one, two: $two) {
        one
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
      const data = res.data.data.createThing;
      expect(res.status).toBe(200);
      expect(data).toEqual(variables);
    })
    .catch(err => console.log(err));
});
