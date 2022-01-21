import { gql } from '@apollo/client';

export const CREATE_TASK_WITH_TAGS = gql`
  mutation CreateTaskWithTags(
    $tags: [ITagPayload!]!
    $subject: String!
    $projectId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    createTaskWithTags(
      tags: $tags
      subject: $subject
      projectId: $projectId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      subject
      projectId
      startDate
      endDate
      estimeeSpentTime
      advancement
      tags {
        id
        label
        color
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTaskById(
    $idTask: String!
    $subject: String!
    $projectId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    updateTaskById(
      id: $idTask
      subject: $subject
      projectId: $projectId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      subject
      projectId
      startDate
      endDate
      estimeeSpentTime
      advancement
      tags {
        id
        label
        color
      }
    }
  }
`;
