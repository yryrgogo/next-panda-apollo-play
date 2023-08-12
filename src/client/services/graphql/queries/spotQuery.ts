import { gql } from '@apollo/client';

export const SPOT_DATA = gql`
  fragment Spot on Spot {
    __typename
    id
    name
    description
  }
`;

export const GET_SPOTS = gql`
  query GetSpotList {
    spots {
      spots {
        ...Spot
      }
    }
  }
  ${SPOT_DATA}
`;

export const GET_SPOT = gql`
  query GetSpot($spotId: ID!) {
    spot(id: $spotId) {
      ...Spot
    }
  }
  ${SPOT_DATA}
`;
