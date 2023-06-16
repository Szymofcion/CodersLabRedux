import React from "react";

import { connect } from "react-redux";

import Quote from '../components/Quote';

import { fetchQuote } from "../redux/actions";

const mapStateToProps = (state) => ({
  loading: state.quote.loading,
  quote: state.quote.quote,
  error: state.quote.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
