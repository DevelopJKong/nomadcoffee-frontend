/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_me_user {
  __typename: "User";
  username: string | null;
  avatarUrl: string | null;
}

export interface me_me {
  __typename: "MeOutput";
  user: me_me_user | null;
}

export interface me {
  me: me_me;
}
