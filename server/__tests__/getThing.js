import axios from 'axios';
import gql from 'graphql-tag';

it('works', async () => {
  return axios
    .post('http://localhost:4000/graphql', {
      query: gql`
        {
          getThing(id: 2) {
            two
          }
        }
      `,
    })
    .then(res => {
      expect(res.data.data).toMatchSnapshot();
    });
});
