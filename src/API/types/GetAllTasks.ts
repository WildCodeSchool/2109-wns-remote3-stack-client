/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllTasks
// ====================================================

export interface GetAllTasks_getAllTasks_tags {
  __typename: "ITag";
  id: string;
  label: string;
  color: string;
}

export interface GetAllTasks_getAllTasks {
  __typename: "ITask";
  id: string;
  projectId: string;
  subject: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: number;
  advancement: string;
  tags: GetAllTasks_getAllTasks_tags[];
}

export interface GetAllTasks {
  getAllTasks: GetAllTasks_getAllTasks[];
}
