import {gql} from '@apollo/client';

export const GET_ALL_LIFTS = gql`
  query {
    allLifts {
      id
      status
      capacity
    }
  }
`;
