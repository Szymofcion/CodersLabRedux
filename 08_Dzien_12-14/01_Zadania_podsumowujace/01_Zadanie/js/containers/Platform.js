import React from "react";

import { connect } from "react-redux";

import Platform from "../components/Platform";

import { startLaunching } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    launched: state.launched,
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deploy: () => dispatch(startLaunching()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
