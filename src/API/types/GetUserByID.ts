/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserByID
// ====================================================

export interface GetUserByID_getUserByID {
  __typename: "IUser";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export interface GetUserByID {
  getUserByID: GetUserByID_getUserByID;
}

export interface GetUserByIDVariables {
  getUserByIdId: string;
}
