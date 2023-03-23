/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SeeCoffeeShopsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: seeCoffeeShops
// ====================================================

export interface seeCoffeeShops_seeCoffeeShops_shops_user {
  __typename: "User";
  username: string | null;
  avatarUrl: string | null;
}

export interface seeCoffeeShops_seeCoffeeShops_shops_photos {
  __typename: "CoffeeShopPhoto";
  url: string;
}

export interface seeCoffeeShops_seeCoffeeShops_shops_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface seeCoffeeShops_seeCoffeeShops_shops {
  __typename: "CoffeeShop";
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  user: seeCoffeeShops_seeCoffeeShops_shops_user | null;
  photos: seeCoffeeShops_seeCoffeeShops_shops_photos[] | null;
  categories: seeCoffeeShops_seeCoffeeShops_shops_categories[] | null;
}

export interface seeCoffeeShops_seeCoffeeShops {
  __typename: "SeeCoffeeShopsOutput";
  ok: boolean;
  error: string | null;
  shops: seeCoffeeShops_seeCoffeeShops_shops[] | null;
}

export interface seeCoffeeShops {
  seeCoffeeShops: seeCoffeeShops_seeCoffeeShops;
}

export interface seeCoffeeShopsVariables {
  seeCoffeeShopsInput: SeeCoffeeShopsInput;
}
