/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTaskById
// ====================================================

export interface DeleteTaskById_deleteTaskById {
  __typename: "ITask";
  id: string;
}

export interface DeleteTaskById {
  deleteTaskById: DeleteTaskById_deleteTaskById;
}

export interface DeleteTaskByIdVariables {
  taskId: string;
}
