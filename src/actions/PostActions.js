import axios from "axios";
import {
  USER_GET_POST_FAIL,
  USER_GET_POST_REQUEST,
  USER_GET_POST_SUCCESS,
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
} from "../constants/PostConstant";

export const post = (name, username, caption, photo) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: USER_POST_REQUEST,
    payload: { name, username, caption, photo },
  });
  try {
    const {
      userSignin: { userData },
    } = getState();
    const res = await axios.post(
      "https://warm-shore-22487.herokuapp.com/api/posts/v2",
      {
        name,
        username,
        caption,
        photo,
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );

    dispatch({ type: USER_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: USER_GET_POST_REQUEST });
  try {
    const res = await axios.get(
      "https://warm-shore-22487.herokuapp.com/api/posts/"
    );
    dispatch({ type: USER_GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_GET_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
