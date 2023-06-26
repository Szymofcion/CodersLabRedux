import React from "react";
import Panel from "../Panel";

const AllProducts = ({ productsList }) => {
  return (
    <>
      <h1 className="title">Wszystkie produkty</h1>
      <Panel
        iconName={"folder"}
        path={"products"}
        listElements={productsList}
        heading={false}
        footer={false}
      />
    </>
  );
};

export default AllProducts;
