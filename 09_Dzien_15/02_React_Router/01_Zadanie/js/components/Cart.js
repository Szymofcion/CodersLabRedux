import React from "react";
import Form from "./Form";
import List from "./List";
import { useParams } from "react-router-dom";

const Cart = ({ products, sum, addProduct, removeProduct }) => {
  const { filter } = useParams();
  return (
    <div>
      <Form addProduct={addProduct} />
      <List removeProduct={removeProduct} products={products} />
      <h1>Do zapłaty: {sum} PLN</h1>
    </div>
  );
};

export default Cart;
