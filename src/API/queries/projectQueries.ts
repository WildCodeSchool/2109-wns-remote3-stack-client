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
export const GET_ONE_PROJECT = gql`
  query getProjectById($getProjectByIdId: String!) {
    getProjectByID(id: $getProjectByIdId) {
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
        tags {
          label
          color
        }
      }
      members {
        userId
        projectId
        projectRole
      }
      startDate
      endDate
      estimeeSpentTime
    }
  }
`;
