import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.color === "light"
        ? (state.color = "dark")
        : (state.color = "light");
    },
  },
});

export default themeSlice.reducer;

export const { switchTheme } = themeSlice.actions;
