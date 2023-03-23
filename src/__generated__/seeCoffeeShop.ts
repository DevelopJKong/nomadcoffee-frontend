/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SeeCoffeeShopInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: seeCoffeeShop
// ====================================================

export interface seeCoffeeShop_seeCoffeeShop_shop_user {
  __typename: "User";
  username: string | null;
  avatarUrl: string | null;
}

export interface seeCoffeeShop_seeCoffeeShop_shop_photos {
  __typename: "CoffeeShopPhoto";
  url: string;
}

export interface seeCoffeeShop_seeCoffeeShop_shop_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface seeCoffeeShop_seeCoffeeShop_shop {
  __typename: "CoffeeShop";
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  user: seeCoffeeShop_seeCoffeeShop_shop_user | null;
  photos: seeCoffeeShop_seeCoffeeShop_shop_photos[] | null;
  categories: seeCoffeeShop_seeCoffeeShop_shop_categories[] | null;
}

export interface seeCoffeeShop_seeCoffeeShop {
  __typename: "SeeCoffeeShopOutput";
  ok: boolean;
  error: string | null;
  shop: seeCoffeeShop_seeCoffeeShop_shop | null;
}

export interface seeCoffeeShop {
  seeCoffeeShop: seeCoffeeShop_seeCoffeeShop;
}

export interface seeCoffeeShopVariables {
  seeCoffeeShopInput: SeeCoffeeShopInput;
}
