import { createSlice } from "@reduxjs/toolkit";
import { listData } from "../listData";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    value: listData,
    isAuth: false,
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
    isAuthLogin: (state) => {
      console.log(state.isAuth);
      state.isAuth = true;
    },
    isLogOut: (state) => {
      state.isAuth = false;
      console.log(state.isAuth);
    },
  },
});

export const { addList, deleteList, isAuthLogin, isLogOut } = listSlice.actions; // updateList
export default listSlice.reducer;
