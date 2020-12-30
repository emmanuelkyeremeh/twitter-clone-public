import {
  USER_GET_POST_FAIL,
  USER_GET_POST_REQUEST,
  USER_GET_POST_SUCCESS,
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
} from "../constants/PostConstant";

export const userPostReducer = (state = {}, action) => {
  if (action.type === USER_POST_REQUEST) {
    return { loading: true };
  } else if (action.type === USER_POST_SUCCESS) {
    return { loading: false, posts: action.payload };
  } else if (action.payload === USER_POST_FAIL) {
    return { loading: false, error: action.payload };
  } else {
    return state;
  }
};

export const userGetPostReducer = (
  state = { loading: true, posts: [] },
  action
) => {
  if (action.type === USER_GET_POST_REQUEST) {
    return { loading: true };
  } else if (action.type === USER_GET_POST_SUCCESS) {
    return { loading: false, posts: action.payload };
  } else if (action.type === USER_GET_POST_FAIL) {
    return { loading: false, error: action.payload };
  } else {
    return state;
  }
};
