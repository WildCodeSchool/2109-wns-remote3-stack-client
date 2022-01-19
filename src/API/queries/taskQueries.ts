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
    }
  }
`;

export const GET_ONE_TASK = gql`
  query getTaskByID($getTaskByIdId: String!) {
    getTaskByID(id: $getTaskByIdId) {
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
