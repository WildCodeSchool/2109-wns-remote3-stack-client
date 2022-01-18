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
