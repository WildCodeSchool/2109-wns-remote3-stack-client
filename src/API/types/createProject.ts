/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createProject
// ====================================================

export interface createProject_createProject {
  __typename: "IProject";
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
}

export interface createProject {
  createProject: createProject_createProject;
}

export interface createProjectVariables {
  userId: string;
  name: string;
  description: string;
  status: string;
  startDate: any;
  endDate: string;
  estimeeSpentTime: number;
}
