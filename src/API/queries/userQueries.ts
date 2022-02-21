import { gql } from '@apollo/client';

export const GET_USER_WITH_PROJECT = gql`
  query GetUserWithProjects($getUserWithProjectsId: String!) {
    getUserWithProjects(id: $getUserWithProjectsId) {
      projects {
        userId
        projectId
        projectRole
      }
    }
  }
`;
