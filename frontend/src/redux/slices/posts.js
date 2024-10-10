import axios from "../../axios";
import createAppSlice from "../utils/createAppSlice";

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
    fetchTags: create.asyncThunk(
      async () => {
        const { data } = await axios.get("/tags");
        return data;
      },
      {
        pending: (state) => {
          state.tags.status = "loading";
          state.tags.items = [];
        },
        rejected: (state) => {
          state.tags.status = "error";
          state.tags.items = [];
        },
        fulfilled: (state, action) => {
          state.tags.status = "loaded";
          state.tags.items = action.payload;
        },
      }
    ),
  }),
});

export default postsSlice.reducer;
export const { fetchPosts, fetchTags } = postsSlice.actions;
