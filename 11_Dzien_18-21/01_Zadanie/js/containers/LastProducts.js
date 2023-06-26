import React from "react";
import { connect } from "react-redux";
import LastProducts from "../components/Home/LastProducts";

const mapStateToProps = (state) => {
  return {
    productsList: state.products,
  };
};

export default connect(mapStateToProps)(LastProducts);
