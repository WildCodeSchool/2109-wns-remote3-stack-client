import { gql } from '@apollo/client';

export const CREATE_TAG = gql`
  mutation CreateTag($payload: ITagPayload!) {
    createTag(payload: $payload) {
      id
      label
      color
    }
  }
`;
