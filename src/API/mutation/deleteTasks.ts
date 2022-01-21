import { gql } from '@apollo/client';

export const DELETE_TASK = gql`
  mutation DeleteTaskById($taskId: String!) {
    deleteTaskById(id: $taskId) {
      id
    }
  }
`;
