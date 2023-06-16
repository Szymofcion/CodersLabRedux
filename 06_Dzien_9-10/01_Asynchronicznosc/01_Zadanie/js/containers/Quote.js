import React from "react";
import { connect } from "react-redux";
import { fetchQuote, addFav } from "../redux/actions";

import Quote from '../components/Quote';

// { quote: { quote, error, loading }}
const mapStateToProps = (state) => ({
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error
});

const mapDispatchToProps = (dispatch) => ({
    fetchQuote: () => dispatch(fetchQuote()),
    addToFav: (payload) => dispatch(addFav(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
