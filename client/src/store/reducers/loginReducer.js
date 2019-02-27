import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_ERROR } from "../types"; // Import of variable names so that you can use them/reduce errors

// Sets initial state for the application
const initialState = {
  username: "",
  password: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        initialState2: false,
        initialState1: { ...state.initialState1, initialState3: action.payload } // Spread in of initial state + updated state
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: "Random string content",
        initiaState2: false
      };
    default:
      return state;
  }
};

// Don't forget to spread in previous state in appropriate places
