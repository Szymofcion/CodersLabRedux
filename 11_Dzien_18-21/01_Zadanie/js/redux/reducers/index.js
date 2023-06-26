import { combineReducers } from "redux";
import productsReducer from "./products";
import recipesReducer from "./recipes";

export default combineReducers({
  products: productsReducer,
  recipes: recipesReducer,
});
