// Plik z akcjami

export const QUOTE_FETCHING = "QUOTE_FETCHING";
export const QUOTE_FETCHED = "QUOTE_FETCHED";
export const QUOTE_ERROR = "QUOTE_ERROR";
import API from "../api/index";

export const fetchQuote = () => {
  return (dispatch) => {
    dispatch(quoteFetching);

    API.fetchQuote()
      .then((res) => dispatch(quoteFetched(res)))
      .catch((err) => dispatch(quoteError(err)));
  };
};

export const quoteFetching = () => ({
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

// export const fetchQuote = () => {
//   return (dispatch) => {
//     dispatch(quoteFetching());

//     API.fetchQuote()
//       .then(response => dispatch(quoteFetched(response)))
//       .catch(error => dispatch(quoteError(error)));
//   }
// }

// // startFetching
// export const quoteFetching = () => ({
//   type: QUOTE_FETCHING,
// });

// export const quoteFetched = (payload) => ({
//   type: QUOTE_FETCHED,
//   payload,
// });

// export const quoteError = (payload) => ({
//   type: QUOTE_ERROR,
//   payload,
// });
