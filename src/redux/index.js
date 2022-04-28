import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Posts/reducer";
import { productsLikeReducer } from "./Likes/likeReducer";

export const store = configureStore({
  reducer: {
    post: postReducer,
    productsLikeState: productsLikeReducer,
  },
});
