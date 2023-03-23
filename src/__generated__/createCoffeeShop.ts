/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateCoffeeShopInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createCoffeeShop
// ====================================================

export interface createCoffeeShop_createCoffeeShop {
  __typename: "CreateCoffeeShopOutput";
  ok: boolean;
  error: string | null;
  message: string | null;
}

export interface createCoffeeShop {
  createCoffeeShop: createCoffeeShop_createCoffeeShop;
}

export interface createCoffeeShopVariables {
  createCoffeeShopInput: CreateCoffeeShopInput;
}
