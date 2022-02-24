import { gql } from '@apollo/client';

export const CREATE_TASK_WITH_TAGS = gql`
  mutation CreateTaskWithTags(
    $tags: [ITagPayload!]!
    $name: String!
    $description: String!
    $projectId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    createTaskWithTags(
      tags: $tags
      name: $name
      description: $description
      projectId: $projectId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      name
      description
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
    $updateTaskByIdId: String!
    $name: String!
    $description: String!
    $projectId: String!
    $endDate: String!
    $advancement: String!
    $estimeeSpentTime: Float!
  ) {
    updateTaskById(
      id: $updateTaskByIdId
      name: $name
      description: $description
      projectId: $projectId
      endDate: $endDate
      advancement: $advancement
      estimeeSpentTime: $estimeeSpentTime
    ) {
      id
      name
      description
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
