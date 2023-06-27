import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../redux/actions";

const Quote = () => {
  const dispatch = useDispatch();

  const { loading, err } = useSelector((state) => state.quote);
  const { quote } = useSelector((state) => state.quote);

  const handleRenderQuote = () => {
    dispatch(fetchQuote());
    console.log(loading);
  };
  return (
    <div>
      <button disabled={loading} onClick={handleRenderQuote}>
        find
      </button>
      {quote && (
        <p>
          {quote.quote} / {quote.author}
        </p>
      )}
      {loading === true ? "Ładuję cytat..." : ""}
      {err && err}
    </div>
  );
};

export default Quote;

// const Quote = ({quote, loading, error, fetchQuote}) => (
//   <div>
//     <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
//     {quote && <p>{quote.quote} / {quote.author}</p>}
//     {loading && "Ładuję cytat..."}
//     {error && error}
//   </div>
// );

// export default Quote;
