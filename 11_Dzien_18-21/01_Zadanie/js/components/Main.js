import React from "react";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "./Home";
import AllProducts from "../containers/AllProducts";
import AddProduct from "../containers/AddProduct";
import ProductDetails from "../containers/ProductDetails";

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <AllProducts />
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/products/add"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default Main;
