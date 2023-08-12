import { Reference } from '@apollo/client';
import { NextSSRInMemoryCache } from '@apollo/experimental-nextjs-app-support/ssr';

const cache: NextSSRInMemoryCache = new NextSSRInMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        spots: {
          keyArgs: false,
          merge(existing, incoming) {
            let spots: Reference[] = [];
            if (existing && existing.spots) {
              spots = spots.concat(existing.spots);
            }
            if (incoming && incoming.spots) {
              spots = spots.concat(incoming.spots);
            }
            return {
              ...incoming,
              spots,
            };
          },
        },
        user: {
          keyArgs: false,
          merge(existing, incoming) {
            console.log(
              `existing: ${JSON.stringify(existing)}, incoming: ${JSON.stringify(incoming)}`,
            );
            return {
              ...existing,
              ...incoming,
            };
          },
        },
      },
    },
  },
});

export { cache };
