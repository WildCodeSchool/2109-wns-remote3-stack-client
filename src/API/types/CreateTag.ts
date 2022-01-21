/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ITagPayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTag
// ====================================================

export interface CreateTag_createTag {
  __typename: "ITag";
  id: string;
  label: string;
  color: string;
}

export interface CreateTag {
  createTag: CreateTag_createTag;
}

export interface CreateTagVariables {
  payload: ITagPayload;
}
