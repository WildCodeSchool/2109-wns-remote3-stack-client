import { gql } from '@apollo/client';

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      id
      name
      status
      startDate
      endDate
      estimeeSpentTime
    }
  }
`;
export const GetOneProject = gql`
  query getProjectById($id: String!) {
    getProjectByID(id: $id) {
      id
      name
      description
      status
      tasks {
        id
        subject
        projectId
        startDate
        endDate
        estimeeSpentTime
        advancement
      }
      members {
        userId
      }
      startDate
      endDate
      estimeeSpentTime
    }
  }
`;
