import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation Mutation($deleteTaskByIdId: String!) {
    deleteTaskById(id: $deleteTaskByIdId) {
      id
    }
  }
`;
