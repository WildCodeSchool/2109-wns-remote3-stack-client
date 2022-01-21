/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUsers
// ====================================================

export interface GetAllUsers_getAllUsers {
  __typename: "IUser";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export interface GetAllUsers {
  getAllUsers: GetAllUsers_getAllUsers[];
}
