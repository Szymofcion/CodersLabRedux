import React from "react";

const Quote = ({quote, loading, error, fetchQuote, addToFav}) => (
  <div>
    <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
    {quote && (
      <>
        <p>{quote.quote} / {quote.author}</p>
        <button onClick={() => addToFav(quote)}>Dodaj do ulubionych</button>
      </>
    )}
    {loading && "Ładuję cytat..."}
    {error && error}
  </div>
);

export default Quote;
