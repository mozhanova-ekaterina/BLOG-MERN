import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const removePost = createAsyncThunk("posts/removePost", async (id) => {
  const { data } = await axios.delete(`/posts/${id}`);
  return data;
});

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await axios.get("/tags");
  return data;
});

export const fetchComments = createAsyncThunk("posts/fetchComments", async () => {
  const { data } = await axios.get(`/comments`);
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
  comments:{
    items: [],
    status: "loading",
  }
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Posts
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    //Tags
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.tags.items = action.payload;
      state.tags.status = "loaded";
    });
    builder.addCase(fetchTags.rejected, (state) => {
      state.tags.items = [];
      state.tags.status = "loading";
    });
    builder.addCase(fetchTags.pending, (state) => {
      state.tags.items = [];
      state.tags.status = "loading";
    });
    //RemovePost
    builder.addCase(removePost.fulfilled, (state, action) => {
      state.posts.items = state.posts.items.filter((post) => post._id !== action.meta.arg);
      state.posts.status = "loaded";
    });
    builder.addCase(removePost.rejected, (state) => {
      state.posts.status = "loaded";
    });
    //Comments
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.comments.items = action.payload;  
      state.comments.status = "loaded";
    });
  },
});

export default postsSlice.reducer;
