import { gql } from '@apollo/client';

export const SPOT_TILE_DATA = gql`
  fragment SpotTile on Spot {
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
        ...SpotTile
      }
    }
  }
  ${SPOT_TILE_DATA}
`;

export const GET_SPOT = gql`
  query GetSpot($spotId: ID!) {
    spot(id: $spotId) {
      ...SpotTile
    }
  }
  ${SPOT_TILE_DATA}
`;
