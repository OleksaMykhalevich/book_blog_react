import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Posts/reducer";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
