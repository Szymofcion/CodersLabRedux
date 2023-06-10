// export {
//   INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
//   increment, decrement, addProduct, changeOrder
// };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const increment = () => ({
  type: INCREMENT,
});
const decrement = () => ({
  type: DECREMENT,
});

export { INCREMENT, DECREMENT, increment, decrement };
