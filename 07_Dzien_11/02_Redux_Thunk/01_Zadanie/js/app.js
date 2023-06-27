import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Quote from "./components/Quote";
import Favourites from "./containers/Favourites";

const App = () => (
  <Provider store={store}>
    <Quote />
    <Favourites />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
