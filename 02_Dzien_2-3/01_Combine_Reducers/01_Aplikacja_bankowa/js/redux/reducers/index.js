/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */

import { combineReducers } from "redux";
import counter from './counter';
import bank from './bank';

const combinedReducer = combineReducers({ counter, bank });

export default combinedReducer;
