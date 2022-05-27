import { createSlice } from "@reduxjs/toolkit";
import { listData } from "../listData";

const listSlice = createSlice({
  name: "lists",
  initialState: { value: listData },
  reducers: {
    addList: (state, action) => {
      state.value.push(action.payload);
    },
    // updateList: (state, action) => {
    //   state.value.map((user) => {
    //     if (user.id === action.payload.id) {
    //       user.username = action.payload.username;
    //     }
    //   });
    // },
    deleteList: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addList, deleteList } = listSlice.actions; // updateList
export default listSlice.reducer;
