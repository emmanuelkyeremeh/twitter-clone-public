import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userGetPostReducer, userPostReducer } from "./reducers/PostReducer";
import { UserRegisterReducer, UserSigninReducer } from "./reducers/UserReducer";

const initialState = {
  userSignin: {
    userData: localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null,
  },
};

const reducer = combineReducers({
  userRegister: UserRegisterReducer,
  userSignin: UserSigninReducer,
  userPost: userPostReducer,
  getPosts: userGetPostReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
