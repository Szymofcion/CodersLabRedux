// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:

import { connect } from "react-redux";
import Cart from "../components/Cart";
import { addProduct, removeProduct } from "../redux/actions";
import { filteredProducts } from "../redux/selectors";

const mapState = (state) => {
  return {
    products: filteredProducts(state),
    sum: sum(state)
  };
};

const mapDispatch = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product));
    },
    removeProduct: (product) => {
      dispatch(removeProduct(product));
    },
  };
};

export default connect(mapState, mapDispatch)(Cart);

