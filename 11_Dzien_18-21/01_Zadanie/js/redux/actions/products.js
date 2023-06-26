const ADD_PRODUCT = "ADD_PRODUCT";

const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export { addProduct, ADD_PRODUCT };
