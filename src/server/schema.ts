import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    spots: SpotConnection!
    spot(id: ID!): Spot
    user(id: ID!): User
  }

  type Mutation {
    login(email: String): User
  }

  type SpotConnection {
    spots: [Spot]!
  }

  type Spot {
    id: ID!
    name: String!
    description: String!
  }

  type User {
    id: ID!
    email: String!
    spots: [Spot]
  }
`;

export { typeDefs };
