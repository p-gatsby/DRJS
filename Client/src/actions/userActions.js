import axios from "axios";

export const USER_LOGIN_PENDING = "USER_LOGIN_PENDING";
export const USER_LOGIN_FULLFILLED = "USER_LOGIN_FULLFILLED";
export const USER_LOGIN_REJECTED = "USER_LOGIN_REJECTED";
export const USER_LOGOUT = "USER_LOGOUT";

export const FETCH_USER_INFO_PENDING = "FETCH_USER_INFO_PENDING";
export const FETCH_USER_INFO_FULLFILLED = "FETCH_USER_INFO_FULLFILLED";
export const FETCH_USER_INFO_REJECTED = "FETCH_USER_INFO_REJECTED";

export const USER_REGISTER_PENDING = "USER_REGISTER_PENDING";
export const USER_REGISTER_FULLFILLED = "USER_REGISTER_FULLFILLED";
export const USER_REGISTER_REJECTED = "USER_REGISTER_REJECTED";
export const USER_REGISTER_RESET = "USER_REGISTER_RESET";

export const USER_UPDATE_PROFILE_PENDING = "USER_UPDATE_PROFILE_PENDING";
export const USER_UPDATE_PROFILE_FULLFILLED = "USER_UPDATE_PROFILE_FULLFILLED";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";
export const USER_UPDATE_PROFILE_REJECTED = "USER_UPDATE_PROFILE_REJECTED";

export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_FULLFILLED = "FETCH_USERS_FULLFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_PENDING,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login/",
      {
        username: username,
        password: password,
      },
      config
    );

    dispatch({
      type: USER_LOGIN_FULLFILLED,
      payload: data,
    });

    localStorage.setItem("userLogin", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const register =
  (username, email, password, first_name, last_name) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_PENDING,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/register/",
        {
          username: username,
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        },
        config
      );

      dispatch({
        type: USER_REGISTER_FULLFILLED,
      });

      dispatch({
        type: USER_LOGIN_FULLFILLED,
        payload: data,
      });

      localStorage.setItem("userLogin", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_REJECTED,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const updateUserProfile =
  (username, email, password, first_name, last_name) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_PROFILE_PENDING,
      });

      const { access } = getState().userLogin;

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${access}`,
        },
      };

      const { data } = await axios.put(
        "/api/users/update/",
        {
          username: username,
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        },
        config
      );

      dispatch({
        type: USER_UPDATE_PROFILE_FULLFILLED,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_PROFILE_REJECTED,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const fetchUserInfo = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USER_INFO_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.get("/api/users/profile/", config);

    dispatch({
      type: FETCH_USER_INFO_FULLFILLED,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FETCH_USER_INFO_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userLogin");
  localStorage.removeItem("userInfo");

  dispatch({
    type: USER_LOGOUT,
  });
};

export const fetchUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USERS_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.get("/api/users/", config);

    dispatch({
      type: FETCH_USERS_FULLFILLED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
