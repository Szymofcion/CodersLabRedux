import { ADD_PRODUCT } from "../actions/products";

const initialState = [
  { id: 1, name: "Pomidory" },
  { id: 2, name: "Przyprawa curry" },
  { id: 3, name: "Olej" },
  { id: 4, name: "Wołowina 500g" },
  { id: 5, name: "Ziemniaki" },
  { id: 6, name: "Kartofle" },
];

function productsReducer(state = initialState, action) {
  if (action.type === ADD_PRODUCT) {
    return [...state, action.payload];
  }
  return state;
}

export default productsReducer;
