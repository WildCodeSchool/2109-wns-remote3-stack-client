import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // TODO: REMOVE LOCALHOST WHEN APP WILL GO TO PRODUCTION
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});
