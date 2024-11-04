import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import authReducer from "./slices/auth";
import themeReducer from "./slices/theme";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    theme: themeReducer
  },
});

//https://redux-toolkit.js.org/introduction/getting-started
