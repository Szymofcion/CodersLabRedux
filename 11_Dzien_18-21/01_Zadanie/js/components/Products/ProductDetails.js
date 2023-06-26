import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails({ productsList }) {
  const { id } = useParams();
  return (
    <div>{productsList.find(({ id: elemId }) => elemId === +id).name}</div>
  );
}
