import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { AccessTokenProps } from "@/types/types";

const initialState: AccessTokenProps = {
  accessToken: "",
};

const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { setAccessToken, clearAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
