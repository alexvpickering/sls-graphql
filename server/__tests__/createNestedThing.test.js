import axios from "axios";
import gql from "graphql-tag";

it("creates a thing", async () => {
  const variables = {
    things: [
      { one: "thing one", two: "thing two" },
      { one: "thing one two", two: "thing two two" }
    ]
  };

  const query = gql`
    mutation createNestedThing($things: [ThingInput]) {
      createNestedThing(things: $things) {
        things {
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
      const data = res.data.data.createNestedThing;
      expect(res.status).toBe(200);
      expect(data).toEqual(variables);
    });
});
