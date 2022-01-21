import { gql } from '@apollo/client';

export const CREATE_USER_PROJECT = gql`
  mutation CreateUserProject(
    $userId: String!
    $projectId: String!
    $projectRole: String!
  ) {
    createUserProject(
      userId: $userId
      projectId: $projectId
      projectRole: $projectRole
    ) {
      userId
      projectId
      projectRole
    }
  }
`;

export const DELETE_USER_PROJECT = gql`
  mutation DeleteUserProject($projectId: String!, $userId: String!) {
    deleteUserProject(projectId: $projectId, userId: $userId) {
      userId
      projectId
      projectRole
    }
  }
`;
