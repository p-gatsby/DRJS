import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsListReducer, productReducer } from "./slices/productSlice";



const rootReducer = combineReducers({
  products: productsListReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
