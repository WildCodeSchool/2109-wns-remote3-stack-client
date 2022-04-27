/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserWithProjects
// ====================================================

export interface GetUserWithProjects_getUserWithProjects_projects {
  __typename: "IUserProject";
  userId: string;
  projectId: string;
  projectRole: string;
}

export interface GetUserWithProjects_getUserWithProjects {
  __typename: "IUserWithProjects";
  projects: GetUserWithProjects_getUserWithProjects_projects[];
}

export interface GetUserWithProjects {
  getUserWithProjects: GetUserWithProjects_getUserWithProjects;
}

export interface GetUserWithProjectsVariables {
  getUserWithProjectsId: string;
}
