// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować
import { createSelector } from "reselect";

const selectProducts = (state) => {
  state.products;
};
const selectFilter = (state) => {
  state.filter;
};

const filteredProducts = createSelector(
  selectProducts,
  selectFilter,
  (products) => products.filter((product) => product.price <= +filter)
);

const sum = createSelector(filteredProducts, (filteredProducts) =>
  filteredProducts.reduce((acc, cur) => acc + +cur.price, 0)
);

export { selectProducts, filteredProducts, sum };
