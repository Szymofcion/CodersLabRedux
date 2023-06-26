import React from "react";
import Panel from "../Panel";
import { useSelector } from "react-redux";

const LastProducts = ({ productsList }) => {
  // const fakeProducts = useSelector((state) => state.products);
  return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={productsList}
      footer={productsList.length > 5}
    />
  );
};

export default LastProducts;
