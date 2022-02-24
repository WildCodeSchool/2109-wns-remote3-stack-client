import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $description: String!
    $status: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $estimeeSpentTime: Float!
  ) {
    createProject(
      name: $name
      description: $description
      status: $status
      startDate: $startDate
      endDate: $endDate
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      name
      description
      status
      startDate
      endDate
      estimeeSpentTime
      members {
        userId
        projectRole
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $updateProjectId: String!
    $name: String!
    $description: String!
    $status: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $estimeeSpentTime: Float!
  ) {
    updateProject(
      id: $updateProjectId
      name: $name
      description: $description
      status: $status
      startDate: $startDate
      endDate: $endDate
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      name
      description
      status
      startDate
      endDate
      estimeeSpentTime
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($deleteProjectByIdId: String!) {
    deleteProjectById(id: $deleteProjectByIdId)
  }
`;
