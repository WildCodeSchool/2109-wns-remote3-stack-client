/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProject
// ====================================================

export interface updateProject_updateProject {
  __typename: "IProject";
  id: string;
  name: string;
  description: string;
  status: string;
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
}

export interface updateProject {
  updateProject: updateProject_updateProject;
}

export interface updateProjectVariables {
  updateProjectId: string;
  name: string;
  description: string;
  status: string;
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
}
