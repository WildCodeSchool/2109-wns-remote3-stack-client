import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation Mutation(
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
