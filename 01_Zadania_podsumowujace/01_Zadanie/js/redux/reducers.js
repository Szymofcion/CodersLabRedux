import { combineReducers } from "redux";

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const combinedReducer = combineReducers({ counter: counterReducer });
export default combinedReducer;
