import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { User } from "@/types/types";

const initialState: User = {
  email: "",
  nickname: "",
  profileImage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.profileImage = action.payload.profileImage;
    },
    logoutUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
