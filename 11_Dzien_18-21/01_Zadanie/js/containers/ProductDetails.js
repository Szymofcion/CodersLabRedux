import React from "react";
import { connect } from "react-redux";
import ProductDetails from "../components/Products/ProductDetails";

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  };
};

export default connect(mapStateToProps)(ProductDetails);
