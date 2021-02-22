import { combineReducers, createStore } from "redux";

const reducer=combineReducers(uUserReducer);
const store=createStore(reducer);
window.store=store;
export default store
