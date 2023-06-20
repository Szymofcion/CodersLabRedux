import React from "react";
import { createRoot } from "react-dom/client";
import Cart from "./containers/Cart";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <nav>
        <NavLink to="/">Wszystkie</NavLink>
        <NavLink to="/10">do 10</NavLink>
        <NavLink to="/50">do 50</NavLink>
        <NavLink to="/100">do 100</NavLink>
      </nav>
      <Routes>
        <Route path=":/filter?" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    <Cart />
  </Provider>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
