import { createSlice } from "@reduxjs/toolkit";
import { listData } from "../listData";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    value: listData,
  },
  reducers: {
    addList: (state, action) => {
      state.value.unshift(action.payload);
    },
    deleteList: (state, action) => {
      if (window.confirm("yakin ingin menghapus item?")) {
        state.value = state.value.filter(
          (user) => user.id !== action.payload.id
        );
      }
    },
  },
});

export const { addList, deleteList } = listSlice.actions; // updateList
export default listSlice.reducer;
