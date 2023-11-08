import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { User } from "@/types/types";

const initialState: User = {
  access_token: "",
};

const userSlice = createSlice({
  name: "access_token",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      // console.log("action", action);
      state.access_token = action.payload;
    },
    logoutUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
