import { gql } from '@apollo/client';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $userId: String!
    $name: String!
    $description: String!
    $status: String!
    $startDate: DateTime!
    $endDate: String!
    $estimeeSpentTime: Float!
  ) {
    createProject(
      userId: $userId
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
