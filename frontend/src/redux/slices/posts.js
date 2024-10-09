import axios from "../../axios";
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

export const createAppSlice = buildCreateSlice({//https://redux-toolkit.js.org/api/createSlice#createasyncthunk
  creators: { asyncThunk: asyncThunkCreator },
})

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

export const postsSlice = createAppSlice({
  name: "posts",
  initialState,
  reducers: (create) => ({
    fetchPosts: create.asyncThunk(
      async () => {
        const { data } = await axios.get("/posts");
        return data;
      },
      {
        pending: (state) => {
          state.posts.status = "loading";
          state.posts.items = [];
        },
        rejected: (state) => {
          state.posts.status = "error";
          state.posts.items = [];
        },
        fulfilled: (state, action) => {
          state.posts.status = "loaded";
          state.posts.items = action.payload;
        },
      }
    ),
  }),
});

export default postsSlice.reducer;
export const {fetchPosts} = postsSlice.actions;
