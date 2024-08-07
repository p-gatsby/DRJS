import axios from "axios";
import { CART_CLEAR_ITEMS } from "./cartActions";

export const ORDER_CREATE_PENDING = "ORDER_CREATE_PENDING";
export const ORDER_CREATE_FULLFILLED = "ORDER_CREATE_FULLFILLED";
export const ORDER_CREATE_REJECTED = "ORDER_CREATE_REJECTED";
export const ORDER_CREATE_RESET = "ORDER_CREATE_RESET";

export const ORDER_INFO_PENDING = "ORDER_INFO_PENDING";
export const ORDER_INFO_FULLFILLED = "ORDER_INFO_FULLFILLED";
export const ORDER_INFO_REJECTED = "ORDER_INFO_REJECTED";

export const ORDER_PAY_PENDING = "ORDER_PAY_PENDING";
export const ORDER_PAY_FULLFILLED = "ORDER_PAY_FULLFILLED";
export const ORDER_PAY_REJECTED = "ORDER_PAY_REJECTED";
export const ORDER_PAY_RESET = "ORDER_PAY_RESET";

export const FETCH_USER_ORDERS_PENDING = "FETCH_USER_ORDERS_PENDING";
export const FETCH_USER_ORDERS_FULLFILLED = "FETCH_USER_ORDERS_FULLFILLED";
export const FETCH_USER_ORDERS_REJECTED = "FETCH_USER_ORDERS_REJECTED";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.post("/api/orders/create/", order, config);

    dispatch({
      type: ORDER_CREATE_FULLFILLED,
      payload: data,
    });

    dispatch({
      type: CART_CLEAR_ITEMS,
    });

    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const fetchOrderInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_INFO_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}/`, config);

    dispatch({
      type: ORDER_INFO_FULLFILLED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_INFO_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_PAY_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${id}/pay/`,
      paymentResult,
      config
    );

    dispatch({
      type: ORDER_PAY_FULLFILLED,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const fetchUserOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_USER_ORDERS_PENDING,
    });

    const { access } = getState().userLogin;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.get("/api/orders/myorders/", config);

    dispatch({
      type: FETCH_USER_ORDERS_FULLFILLED,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: FETCH_USER_ORDERS_REJECTED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
