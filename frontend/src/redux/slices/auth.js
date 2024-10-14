import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (body) => {
    const { data } = await axios.post("/auth/login", body);
    return data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (body) => {
    const { data } = await axios.post("/auth/register", body);
    return data;
  }
);

// export const getUser = createAsyncThunk("auth/getUser", async () => {
//   const { data } = await axios.get("/auth/me");
//   return data;
// });

const initialState = {
  data: null,
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    login: (state, action) => {
      state.data = action.payload
      state.status = 'loaded'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(fetchUserData.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.data = null;
      state.status = "loading";
    });
    builder.addCase(registerUser.pending, (state) => {
      state.data = null;
      state.status = "loading";
    });
    // builder.addCase(getUser.fulfilled, (state) => {
    //   state.data = state.payload;
    //   state.status = "loaded";
    // });
  },
});

export default authSlice.reducer;

export const { logout,login } = authSlice.actions;
