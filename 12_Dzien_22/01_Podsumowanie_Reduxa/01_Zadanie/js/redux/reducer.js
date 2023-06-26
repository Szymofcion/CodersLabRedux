import { combineReducers } from 'redux';

const counterInitialState = {
  isCounting: false,
  value: 0,
  intervalId: null
};

const resultsInitialState = {
  results: []
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'START_COUNTER':
      return {
        ...state,
        isCounting: true,
        value: state.value + 1
      };
    case 'STOP_COUNTER':
      return {
        ...state,
        isCounting: false
      };
    case 'SET_INTERVAL_ID':
      return {
        ...state,
        intervalId: action.payload
      };
    default:
      return state;
  }
};

const resultsReducer = (state = resultsInitialState, action) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    default:
      return state;
  }
};


export default combineReducers({
  counter: counterReducer,
  results: resultsReducer,
});
