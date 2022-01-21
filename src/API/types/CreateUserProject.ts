/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserProject
// ====================================================

export interface CreateUserProject_createUserProject {
  __typename: "IUserProject";
  userId: string;
  projectId: string;
  projectRole: string;
}

export interface CreateUserProject {
  createUserProject: CreateUserProject_createUserProject;
}

export interface CreateUserProjectVariables {
  userId: string;
  projectId: string;
  projectRole: string;
}
