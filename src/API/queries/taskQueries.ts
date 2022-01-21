import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
  query GetAllTasks {
    getAllTasks {
      id
      subject
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

export const GET_ONE_TASK = gql`
  query getTaskByID($taskId: String!) {
    getTaskByID(id: $taskId) {
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
