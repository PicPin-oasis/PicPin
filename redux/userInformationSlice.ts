import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { UserInformationSliceProps } from "@/types/types";

const initialState: UserInformationSliceProps = {
  username: "",
  profileImageUrl: "",
};

const userInformationSlice = createSlice({
  name: "userInformaion",
  initialState,
  reducers: {
    setUserInformation: (state, action) => {
      state.username = action.payload.username;
      state.profileImageUrl = action.payload.profile_image_url;
    },
    clearUserInformation: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { setUserInformation, clearUserInformation } =
  userInformationSlice.actions;
export default userInformationSlice.reducer;
