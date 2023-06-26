import React from "react";
import { connect } from "react-redux";
import AddProduct from "../components/Products/Add";
import { addProduct } from "../redux/actions/products";

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
