import { combineReducers } from "redux";
// import akcji
import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, ADD_FAV } from "./actions";

const initialState = {
    loading: false,
    error: '',
    quote: null,
};

const quote = (state = initialState, action) => {
    switch (action.type) {
        case QUOTE_FETCHING:
            return {...state, loading: true};
        case QUOTE_FETCHED:
            return {...state, quote: action.payload, loading: false};
        case QUOTE_ERROR:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

const favourites = (state = [], action) => {
    switch (action.type) {
        case ADD_FAV:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default combineReducers({
  favourites,
  quote,
});
