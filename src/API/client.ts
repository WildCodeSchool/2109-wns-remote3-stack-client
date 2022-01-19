import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri:
    (import.meta.env.VITE_BACKEND_URL as string) ||
    'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});
