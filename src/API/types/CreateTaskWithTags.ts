/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ITagPayload } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateTaskWithTags
// ====================================================

export interface CreateTaskWithTags_createTaskWithTags_tags {
  __typename: "ITag";
  id: string;
  label: string;
  color: string;
}

export interface CreateTaskWithTags_createTaskWithTags {
  __typename: "ITask";
  id: string;
  name: string;
  description: string;
  projectId: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: number;
  advancement: string;
  tags: CreateTaskWithTags_createTaskWithTags_tags[];
}

export interface CreateTaskWithTags {
  createTaskWithTags: CreateTaskWithTags_createTaskWithTags;
}

export interface CreateTaskWithTagsVariables {
  tags: ITagPayload[];
  name: string;
  description: string;
  projectId: string;
  endDate: string;
  advancement: string;
  estimeeSpentTime: number;
}
