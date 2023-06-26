import React from "react";
import { connect } from "react-redux";
import AllProducts from "../components/Products";

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  };
};

export default connect(mapStateToProps)(AllProducts);
