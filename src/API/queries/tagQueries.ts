import { gql } from '@apollo/client';

export const GET_ALL_TAGS = gql`
  query Query {
    getAllTags {
      id
      label
      color
    }
  }
`;
export const GET_ONE_TAG = gql`
  query GetTagByID($getTagByIdId: String!) {
    getTagByID(id: $getTagByIdId) {
      id
      label
      color
    }
  }
`;
