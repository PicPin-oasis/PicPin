import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface Props {
  editStatus: boolean;
}
const initialState: Props = {
  editStatus: false,
};

const editStatusSlice = createSlice({
  name: "editStatus",
  initialState,
  reducers: {
    setEditStatus: (state, action) => {
      state.editStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { setEditStatus } = editStatusSlice.actions;
export default editStatusSlice.reducer;
