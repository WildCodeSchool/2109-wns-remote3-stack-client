import dotenv from 'dotenv';
import { ApolloClient, InMemoryCache } from '@apollo/client';

dotenv.config();

export const client = new ApolloClient({
  // TODO: REMOVE LOCALHOST WHEN APP WILL GO TO PRODUCTION
  uri: process.env.BACKEND_URL || 'http://localhost:4000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});
