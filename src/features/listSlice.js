import { createSlice } from "@reduxjs/toolkit";
import { listData } from "../listData";

const listSlice = createSlice({
  name: "lists",
  initialState: { value: listData },
  reducers: {
    addList: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addList } = listSlice.actions;
export default listSlice.reducer;
