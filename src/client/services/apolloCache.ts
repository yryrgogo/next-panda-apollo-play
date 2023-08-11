import { InMemoryCache, Reference, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // isLoggedIn: {
        //   read() {
        //     return isLoggedInVar();
        //   },
        // },
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
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
      },
    },
  },
});

// export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem('token'));
export const cartItemsVar = makeVar<string[]>([]);
