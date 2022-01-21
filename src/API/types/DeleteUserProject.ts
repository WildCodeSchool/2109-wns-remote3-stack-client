/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteUserProject
// ====================================================

export interface DeleteUserProject_deleteUserProject {
  __typename: "IUserProject";
  userId: string;
  projectId: string;
  projectRole: string;
}

export interface DeleteUserProject {
  deleteUserProject: DeleteUserProject_deleteUserProject;
}

export interface DeleteUserProjectVariables {
  projectId: string;
  userId: string;
}
