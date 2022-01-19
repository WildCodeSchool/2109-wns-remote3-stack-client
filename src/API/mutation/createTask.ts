import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask(
    $subject: String!
    $projectId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    createTask(
      subject: $subject
      projectId: $projectId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      subject
      startDate
      projectId
      endDate
      estimeeSpentTime
      advancement
    }
  }
`;
