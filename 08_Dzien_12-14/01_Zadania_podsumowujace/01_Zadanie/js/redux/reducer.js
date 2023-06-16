// Miejsce na reducer
import { LAUNCH_ROCKET, DECREMENT_COUNTER } from "./actions";
const initialState = {
  launched: false,
  counter: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCH_ROCKET:
      return {
        ...state,
        launched: true,
        counter: 0,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default reducer;
