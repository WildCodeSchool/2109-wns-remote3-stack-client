/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSelf
// ====================================================

export interface GetSelf_getSelf {
  __typename: "IUser";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
}

export interface GetSelf {
  getSelf: GetSelf_getSelf;
}
