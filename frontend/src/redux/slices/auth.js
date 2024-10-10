import axios from "../../axios";
import createAppSlice from "../utils/createAppSlice";

const initialState = {
  data: null,
  status: "loading",
};

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    fetchUserData: create.asyncThunk(
      async (body) => {
        const { data } = await axios.post("/auth/login", body);
        return data;
      },
      {
        pending: (state) => {
          state.status = "loading";
          state.data = null;
        },
        rejected: (state) => {
          state.status = "error";
          state.data = null;
        },
        fulfilled: (state, action) => {
          state.status = "loaded";
          state.data = action.payload;
        },
      }
    ),
  }),
});

export default authSlice.reducer;
export const { fetchUserData } = authSlice.actions;
