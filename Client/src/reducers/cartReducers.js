import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const CART_ADD_ITEM = createAction("CART_ADD_ITEM");

const CART_REMOVE_ITEM = createAction("CART_REMOVE_ITEM");

export const cartReducer = createReducer(
  {
    cartItems: [],
  },
  (builder) => {
    builder.addCase(CART_ADD_ITEM, (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((p) => p.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.product === existItem.product ? item : p
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    });
  }
);
