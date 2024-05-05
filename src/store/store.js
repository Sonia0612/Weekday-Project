import { configureStore, combineReducers } from "@reduxjs/toolkit";

import jobsReducer from "./features/jobsSlice";

const reducer = combineReducers({
  // to be added
  jobsReducer: jobsReducer,
});

export const store = configureStore({
  reducer: reducer,
});
