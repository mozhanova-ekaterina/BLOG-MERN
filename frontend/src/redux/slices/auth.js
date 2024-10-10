import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (body) => {
  const {data} = await axios.post('/auth/login', body)
  return data
})

const initialState = {
  data: null,
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    })
    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null
      state.status = 'loading'
    })
    builder.addCase(fetchUserData.pending, (state) => {
      state.data = null
      state.status = 'loading'
    })
  }
});

export default authSlice.reducer;
