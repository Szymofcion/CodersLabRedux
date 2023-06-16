// Plik z akcjami

import API from '../api/index';

export const QUOTE_FETCHING = 'QUOTE_FETCHING';
export const QUOTE_FETCHED = 'QUOTE_FETCHED';
export const QUOTE_ERROR = 'QUOTE_ERROR';

export const ADD_FAV = 'ADD_FAV';

export const fetchQuote = () => {
    return (dispatch) => {

        dispatch(startFetching());

        API.fetchQuote()
            .then(response => dispatch(quoteFetched(response)))
            .catch(error => dispatch(quoteError(error)));

    }
}

export const startFetching = () => ({
    type: QUOTE_FETCHING,
});

export const quoteFetched = (payload) => ({
    type: QUOTE_FETCHED,
    payload,
});

export const quoteError = (payload) => ({
    type: QUOTE_ERROR,
    payload,
});

export const addFav = (payload) => ({
    type: ADD_FAV,
    payload,
});
