import { gql } from '@apollo/client';

export const USER_DATA = gql`
  fragment User on User {
    __typename
    id
    email
  }
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      ...User
    }
  }
  ${USER_DATA}
`;
