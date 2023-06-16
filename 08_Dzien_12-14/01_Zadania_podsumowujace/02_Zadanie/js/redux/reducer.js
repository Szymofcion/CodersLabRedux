// Miejsce na reducer

import { COUNT_ROCKET, LAUNCHED_ROCKET } from "./actions";

const initialState = {
    launched: false,
    counter: 5,
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case COUNT_ROCKET: {
            return {
                ...state,
                counter: state.counter - 1,
            }
        }
        case LAUNCHED_ROCKET: {
            return {
                ...state,
                launched: true,
                counter: 0,
            }
        }
        default: {
            return state;
        }
    }
}
