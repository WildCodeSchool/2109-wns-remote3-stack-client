/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllProjects
// ====================================================

export interface GetAllProjects_getAllProjects {
  __typename: "IProject";
  id: string;
  name: string;
  status: string;
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
}

export interface GetAllProjects {
  getAllProjects: GetAllProjects_getAllProjects[];
}
