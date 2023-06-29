import { combineReducers } from "redux";

import { COUNT, PAUSE, SAVE, REMOVE, SET } from './actions';

const initialState = {
    isCounting: false,
    value: 0,
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {...state, value: action.payload}
        case COUNT:
            return {...state, isCounting: true, value: state.value + 1};
        case PAUSE:
            return {...state, isCounting: false};
        default:
            return state;
    }
}

const list = (state = [], action) => {
    switch (action.type) {
        case SAVE:
            return [...state, action.payload];
        case REMOVE:
            return state.filter((el, index) => index !== action.payload);
        default:
            return state;
    }
}

export default combineReducers({
  counter,
  list
});
