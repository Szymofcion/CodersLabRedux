export default store;
import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)));
