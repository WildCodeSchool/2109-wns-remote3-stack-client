import { gql } from '@apollo/client';

export const GetAllTasks = gql`
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

export const GetOneTask = gql`
  query getTaskByID($getTaskByIdId: String!) {
    getTaskByID(id: $getTaskByIdId) {
      id
      subject
      projectId
      startDate
      endDate
      estimeeSpentTime
      advancement
    }
  }
`;
