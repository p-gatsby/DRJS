import { createReducer } from "@reduxjs/toolkit";
import {
  USER_LOGIN_PENDING,
  USER_LOGIN_FULLFILLED,
  USER_LOGIN_REJECTED,
  USER_LOGOUT,
  FETCH_USER_INFO_PENDING,
  FETCH_USER_INFO_FULLFILLED,
  FETCH_USER_INFO_REJECTED,
  USER_REGISTER_PENDING,
  USER_REGISTER_FULLFILLED,
  USER_REGISTER_REJECTED,
  USER_UPDATE_PROFILE_PENDING,
  USER_UPDATE_PROFILE_FULLFILLED,
  USER_UPDATE_PROFILE_REJECTED,
  USER_UPDATE_PROFILE_RESET,
  USER_REGISTER_RESET,
  FETCH_USERS_PENDING,
  FETCH_USERS_FULLFILLED,
  FETCH_USERS_REJECTED,
} from "../actions/userActions";

const userLoginFromLocalStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userLoginReducer = createReducer(
  {
    ...userLoginFromLocalStorage,
  },
  (builder) => {
    builder
      .addCase(USER_LOGIN_PENDING, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(USER_LOGIN_FULLFILLED, (state, action) => {
        return {
          ...action.payload,
        };
      })
      .addCase(USER_LOGIN_REJECTED, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(USER_LOGOUT, () => {
        return {};
      });
  }
);

export const userInfoReducer = createReducer(
  {
    user: userInfoFromLocalStorage ? userInfoFromLocalStorage : null,
  },
  (builder) => {
    builder
      .addCase(FETCH_USER_INFO_PENDING, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FETCH_USER_INFO_FULLFILLED, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(FETCH_USER_INFO_REJECTED, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(USER_LOGOUT, () => {
        return { user: null };
      });
  }
);

export const userRegisterReducer = createReducer({}, (builder) => {
  builder
    .addCase(USER_REGISTER_PENDING, (state) => {
      state.loading = true;
      state.fullfilled = false;
      state.error = null;
    })
    .addCase(USER_REGISTER_FULLFILLED, (state, action) => {
      state.loading = false;
      state.fullfilled = true;
    })
    .addCase(USER_REGISTER_REJECTED, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(USER_REGISTER_RESET, () => {
      return {};
    });
});

export const userUpdateProfileReducer = createReducer({}, (builder) => {
  builder
    .addCase(USER_UPDATE_PROFILE_PENDING, (state) => {
      state.loading = true;
      state.fullfilled = false;
      state.error = null;
    })
    .addCase(USER_UPDATE_PROFILE_FULLFILLED, (state, action) => {
      state.loading = false;
      state.fullfilled = true;
    })
    .addCase(USER_UPDATE_PROFILE_REJECTED, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(USER_UPDATE_PROFILE_RESET, () => {
      return {};
    });
});

export const userListReducer = createReducer(
  {
    users: [],
  },
  (builder) => {
    builder
      .addCase(FETCH_USERS_PENDING, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FETCH_USERS_FULLFILLED, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(FETCH_USERS_REJECTED, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(USER_LOGOUT, () => {
        return { users: [] };
      });
  }
);
