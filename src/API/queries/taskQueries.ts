import { gql } from '@apollo/client';

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
