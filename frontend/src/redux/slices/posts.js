import { createSlice } from "@reduxjs/toolkit"

  const initialState = {
    posts: {
      items: [],
      status: 'loading'
    },
    tags: {
      items: [],
      status: 'loading'
    },
  }

  export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
  })

  export default postsSlice.reducer
  export const {} = postsSlice.actions