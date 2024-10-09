import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";

export const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

//https://redux-toolkit.js.org/introduction/getting-started