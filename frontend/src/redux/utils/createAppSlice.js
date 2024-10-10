import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

export default createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
//https://redux-toolkit.js.org/api/createSlice#createasyncthunk
