import { connect } from 'react-redux';

import React from "react";

import Favourites from '../components/Favourites';

const mapStateToProps = (state) => ({
    quotes: state.favourites
});

export default connect(mapStateToProps)(Favourites);
