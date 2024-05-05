import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  // to be added

});

export const store = configureStore({
  reducer: reducer,
});
