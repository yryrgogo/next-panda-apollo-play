import { Spot } from '~/models/spot';

const spots: Spot[] = [
  {
    id: '1',
    name: 'Spot 1',
    description: 'Spot 1 description',
  },
  {
    id: '2',
    name: 'Spot 2',
    description: 'Spot 2 description',
  },
  {
    id: '3',
    name: 'Spot 3',
    description: 'Spot 3 description',
  },
  {
    id: '4',
    name: 'Spot 4',
    description: 'Spot 4 description',
  },
  {
    id: '5',
    name: 'Spot 5',
    description: 'Spot 5 description',
  },
];

const resolvers = {
  Query: {
    spots: async (_: any, { dataSources }: any) => {
      return {
        spots,
      };
    },
    spot: (_: any, { id }: any, { dataSources }: any) => {
      return {
        id: '2',
        name: 'Spot 2',
        description: 'Spot 2 description',
      };
    },
    me: async (_: any, __: any, { dataSources }: any) => dataSources.userAPI.findOrCreateUser(),
  },
  Mutation: {
    login: async (_: any, { email }: any, { dataSources }: any) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      if (user) {
        user.token = Buffer.from(email).toString('base64');
        return user;
      }
    },
  },
  User: {
    spots: async (_: any, __: any, { dataSources }: any) => {
      return [
        {
          id: '9999',
          name: 'Spot 9999',
          description: 'Spot 9999 description',
        },
      ];
    },
  },
};

export { resolvers };
