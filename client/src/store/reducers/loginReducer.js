import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_STARTED,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../types"; // Import of variable names so that you can use them/reduce errors

// Sets initial state for the application
const initialState = {
  username: "",
  password: "",
  loggingIn: false,
  loggedIn: false,
  loginError: "",
  loggingOut: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload
      };
    case LOGOUT_STARTED:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        loggedIn: false
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loggingOut: false,
        loginError: action.payload
      };
    default:
      return state;
  }
};

// Don't forget to spread in previous state in appropriate places
