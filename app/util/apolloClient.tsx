import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/client-integration-nextjs';

export const { getClient } = registerApolloClient(() => {
  const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.GIT_HUB_TOKEN}`,
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
});
