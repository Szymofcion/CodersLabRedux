/**
 * Tutaj zaimplementuj reducer do aplikacji bankApp
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default bankReducer;
 */

import { WITHDRAW, DEPOSIT } from "../actions/bankActions";

function bankReducer(state = 0, action) {
    switch(action.type) {
        case WITHDRAW:
            return state - action.payload;
        case DEPOSIT:
            return state + action.payload;
        default:
            return state;
    }
}

export default bankReducer;
