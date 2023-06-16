import React from "react";

import { connect } from "react-redux";

import Platform from '../components/Platform';

import { startLaunching } from "../redux/actions";

const mapStateToProps = (state) => ({
    launched: state.launched,
    counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
    deploy: () => dispatch(startLaunching())
});

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
