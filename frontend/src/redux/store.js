import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/Posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})