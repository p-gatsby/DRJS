import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {productListReducer, productDetailsReducer} from "./reducers/productReducers.js";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
