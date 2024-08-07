import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers.js";
import { cartReducer } from "./reducers/cartReducers.js";
import {
  userLoginReducer,
  userInfoReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userListReducer,
} from "./reducers/userReducers.js";
import {
  orderCreateReducer,
  orderInfoReducer,
  orderPayReducer,
  userOrdersReducer,
} from "./reducers/orderReducer.js";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userInfo: userInfoReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userOrders: userOrdersReducer,
  userList: userListReducer,
  orderCreate: orderCreateReducer,
  orderInfo: orderInfoReducer,
  orderPay: orderPayReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
