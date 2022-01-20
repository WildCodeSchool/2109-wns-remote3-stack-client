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
  query getTaskByID($id: String!) {
    getTaskByID(id: $id) {
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
