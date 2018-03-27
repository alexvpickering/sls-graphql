import { graphqlHandler, playgroundHandler } from '../handler';
import axios from 'axios';
import gql from 'graphql-tag';

it('graphqlHandler should be a function', () => {
  expect(typeof graphqlHandler).toBe('function');
});

it('playgroundHandler should be a function', () => {
  expect(typeof playgroundHandler).toBe('function');
});
