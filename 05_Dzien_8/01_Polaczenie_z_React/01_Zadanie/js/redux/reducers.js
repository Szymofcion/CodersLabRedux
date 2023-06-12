import { combineReducers } from "redux";
import { ADD_ARTICLE, ADD_USER } from "./actions";
const initialState = {
  Jan: 0,
  Gosia: 0,
};
const users = (state = initialState, { type, payload }) => {
  if (type === ADD_USER) return { ...state, [payload]: 0 };
  else if (type === ADD_ARTICLE) {
    return {
      ...state,
      [payload.userId]: state[payload.userId] + 1,
    };
  }
  return state;
};

const articles = (state = [], { type, payload }) => {
    if(type === ADD_ARTICLE) {
        return [...state, payload.title]
    }
  return state;
};

export default combineReducers({
  users,
  articles,
});
