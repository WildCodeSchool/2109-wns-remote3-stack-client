/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTaskByID
// ====================================================

export interface getTaskByID_getTaskByID {
  __typename: "ITask";
  id: string;
  subject: string;
  projectId: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: number;
  advancement: string;
}

export interface getTaskByID {
  getTaskByID: getTaskByID_getTaskByID;
}

export interface getTaskByIDVariables {
  id: string;
}
