import React from "react";
import Layout from "./Layout";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Router>
        <Route path="/" element={<Layout></Layout>} />
      </Router>
    </Provider>
  </BrowserRouter>
);

export default Main;
