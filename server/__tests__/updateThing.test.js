import axios from "axios";
import gql from "graphql-tag";

it("updates a thing", () => {
  const variables = { id: "2", one: "new thing 1 two", two: "new thing 2 two" };
  const query = gql`
    mutation UpdateThing($id: ID!, $one: String, $two: String) {
      updateThing(id: $id, one: $one, two: $two) {
        id
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
      const data = res.data.data.updateThing;

      expect(res.status).toBe(200);
      expect(data).toEqual(variables);
    });
});

it("doesn't delete an old thing", () => {
  const variables = { id: "3", one: "new thing 1 three" };
  const query = gql`
    mutation UpdateThing($id: ID!, $one: String, $two: String) {
      updateThing(id: $id, one: $one, two: $two) {
        id
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
      const data = res.data.data.updateThing;

      expect(res.status).toBe(200);
      expect(data.one).toEqual(variables.one);
      expect(data.two).toBeTruthy();
    });
});
