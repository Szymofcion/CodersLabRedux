// Reducer zwracający tablicę produktów
import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const expenses = (
  state = {
    products: [],
    filter: null,
  },
  { type, payload }
) => {
  switch (type) {
    case ADD_PRODUCT: {
      return { ...state, products: [...state, payload] };
    }
    case REMOVE_PRODUCT:
      {
        return state.filter((product) => product !== payload);
      }
      return state;
  }
};

export default expenses;
