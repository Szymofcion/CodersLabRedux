import { createStore } from "redux";
import reducer from "../redux/reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
