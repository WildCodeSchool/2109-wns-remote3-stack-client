import { gql } from '@apollo/client';

export const CREATE_TAG = gql`
  mutation CreateTag($label: String!, $color: String!) {
    createTag(label: $label, color: $color) {
      id
      label
      color
    }
  }
`;
