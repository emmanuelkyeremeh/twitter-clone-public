import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/UserConstants";

export const register = (name, username, email, password) => async (
  dispatch
) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { name, username, email, password },
  });
  try {
    const res = await axios.post(
      "https://warm-shore-22487.herokuapp.com/api/users/signup",
      {
        name,
        username,
        email,
        password,
      }
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data });
    localStorage.setItem("userData", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (username, email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: { username, email, password },
  });
  try {
    const res = await axios.post(
      "https://warm-shore-22487.herokuapp.com/api/users/signin",
      {
        username,
        email,
        password,
      }
    );
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data });
    localStorage.setItem("userData", JSON.stringify(res.data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userData");
  dispatch({ type: USER_SIGNOUT });
};
