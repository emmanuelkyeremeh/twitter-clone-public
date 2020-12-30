import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
} from "../constants/UserConstants";

export const UserRegisterReducer = (state = {}, action) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return { loading: true };
  } else if (action.type === USER_REGISTER_SUCCESS) {
    return { loading: false, userData: action.payload };
  } else if (action.type === USER_REGISTER_FAIL) {
    return { loading: false, error: action.payload };
  } else {
    return state;
  }
};

export const UserSigninReducer = (state = {}, action) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return { loading: true };
  } else if (action.type === USER_SIGNIN_SUCCESS) {
    return { loading: false, userData: action.payload };
  } else if (action.type === USER_SIGNIN_FAIL) {
    return { loading: false, error: action.payload };
  } else if (action.type === USER_SIGNOUT) {
    return {};
  } else {
    return state;
  }
};
