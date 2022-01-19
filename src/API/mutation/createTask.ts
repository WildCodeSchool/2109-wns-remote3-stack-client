import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask(
    $subject: String!
    $projectId: String!
    $tagId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    createTask(
      subject: $subject
      projectId: $projectId
      tagId: $tagId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      subject
      projectId
      tagId
      startDate
      endDate
      estimeeSpentTime
      advancement
    }
  }
`;
