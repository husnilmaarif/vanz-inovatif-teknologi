import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    title: "",
    content: "",
  },
  reducers: {
    update: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export const { update } = listSlice.actions;
export default listSlice.reducer;
