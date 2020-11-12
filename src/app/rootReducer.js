import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bookReducer from "../features/book/bookSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  books: bookReducer
});

export default rootReducer;
