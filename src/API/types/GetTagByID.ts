/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTagByID
// ====================================================

export interface GetTagByID_getTagByID {
  __typename: "ITag";
  id: string;
  label: string;
  color: string;
}

export interface GetTagByID {
  getTagByID: GetTagByID_getTagByID;
}

export interface GetTagByIDVariables {
  tagId: string;
}
