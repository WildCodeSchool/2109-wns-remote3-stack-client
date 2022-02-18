/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProjectById
// ====================================================

export interface getProjectById_getProjectByID_tasks_tags {
  __typename: "ITag";
  label: string;
  color: string;
}

export interface getProjectById_getProjectByID_tasks {
  __typename: "ITask";
  id: string;
  subject: string;
  projectId: string;
  startDate: string;
  endDate: string;
  estimeeSpentTime: number;
  advancement: string;
  tags: getProjectById_getProjectByID_tasks_tags[];
}

export interface getProjectById_getProjectByID_members {
  __typename: "IUserProject";
  userId: string;
  projectId: string;
  projectRole: string;
}

export interface getProjectById_getProjectByID {
  __typename: "IProject";
  id: string;
  name: string;
  description: string;
  status: string;
  tasks: getProjectById_getProjectByID_tasks[];
  members: getProjectById_getProjectByID_members[];
  startDate: any;
  endDate: any;
  estimeeSpentTime: number;
}

export interface getProjectById {
  getProjectByID: getProjectById_getProjectByID;
}

export interface getProjectByIdVariables {
  getProjectByIdId: string;
}
