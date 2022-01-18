import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // TODO: PUT ENV VARIABLE FOR DEPLOY
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});
