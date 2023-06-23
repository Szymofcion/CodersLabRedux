import { combineReducers } from "redux";
import productsReducer from "./products";
import recipesReducer from "./recipes";

combineReducers({
  products: productsReducer,
  recipes: recipesReducer,
});

export default combineReducers;
