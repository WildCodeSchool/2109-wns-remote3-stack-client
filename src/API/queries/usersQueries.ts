import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      email
      firstName
      lastName
      avatar
    }
  }
`;

export const GET_ONE_USER = gql`
  query GetUserByID($getUserByIdId: String!) {
    getUserByID(id: $getUserByIdId) {
      id
      email
      firstName
      lastName
      avatar
    }
  }
`;
