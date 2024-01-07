import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface Props {
  isEditing: boolean;
  type: string;
}
const initialState: Props = {
  isEditing: false,
  type: "",
};

const editStatusSlice = createSlice({
  name: "editStatus",
  initialState,
  reducers: {
    setEditStatus: (state, action) => {
      console.log(action.payload);
      state.isEditing = action.payload.isEditing;
      state.type = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});
export const { setEditStatus } = editStatusSlice.actions;
export default editStatusSlice.reducer;
