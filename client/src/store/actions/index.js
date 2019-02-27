import axios from "axios";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_STARTED,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from "../types"; // Make sure to install dependencies
axios.defaults.withCredentials = true;

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_STARTED });
  const reqOptions = {
    username: creds.username,
    password: creds.password
  };
  axios
    .post("http://localhost:8000/api/login", reqOptions)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.data });
    });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_STARTED });
  axios
    .get("http://localhost:8000/api/logout")
    .then(res => {
      dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGOUT_ERROR, payload: err.data });
    });
};
