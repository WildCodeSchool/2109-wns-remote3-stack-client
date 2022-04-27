/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTaskById
// ====================================================

export interface UpdateTaskById_updateTaskById_tags {
  __typename: "ITag";
  id: string;
  label: string;
  color: string;
}

export interface UpdateTaskById_updateTaskById {
  __typename: "ITask";
  id: string;
  name: string;
  description: string;
  projectId: string;
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
  advancement: string;
  tags: UpdateTaskById_updateTaskById_tags[];
}

export interface UpdateTaskById {
  updateTaskById: UpdateTaskById_updateTaskById;
}

export interface UpdateTaskByIdVariables {
  updateTaskByIdId: string;
  name: string;
  description: string;
  projectId: string;
  endDate: string;
  advancement: string;
  estimeeSpentTime: number;
}
