import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from '~/server/schema';
import { resolvers } from '~/server/resolver';

// NOTE: https://github.com/apollographql/fullstack-tutorial/blob/main/final/server/src/index.js
const dataSources = () => ({
  hogeApi: null,
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req) => {
    console.log('### apollo server context req', JSON.stringify(req));
    console.log('### apollo server context req.headers', JSON.stringify(req.headers));

    return {
      dataSources,
    };
  },
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
