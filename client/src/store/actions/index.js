import axios from "axios"; // Make sure to install dependencies
import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_ERROR } from "../types";

export const login = () => dispatch => {
  dispatch({ type: LOGIN_STARTED });
  axios
    .get("")
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.data });
    });
};
