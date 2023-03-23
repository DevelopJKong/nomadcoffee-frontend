/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateAccountInput {
  email?: string | null;
  username?: string | null;
  password?: string | null;
  name?: string | null;
  location?: string | null;
  avatarUrl?: string | null;
  githubUsername?: string | null;
}

export interface CreateCoffeeShopInput {
  name: string;
  latitude: string;
  longitude: string;
  categoryName: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SeeCoffeeShopInput {
  id: number;
}

export interface SeeCoffeeShopsInput {
  page?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
