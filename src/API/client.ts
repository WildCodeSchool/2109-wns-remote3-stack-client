import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: '',
  credentials: 'include',
  cache: new InMemoryCache(),
});
