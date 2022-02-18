import { gql } from '@apollo/client';

export const GET_ALL_TAGS = gql`
  query GetAllTags {
    getAllTags {
      id
      label
      color
    }
  }
`;
export const GET_ONE_TAG = gql`
  query GetTagByID($tagId: String!) {
    getTagByID(id: $tagId) {
      id
      label
      color
    }
  }
`;
