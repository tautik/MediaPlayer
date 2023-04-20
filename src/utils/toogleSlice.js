import { createSlice } from "@reduxjs/toolkit";

const toogleSlice = createSlice({
  name: "toggle",
  initialState: {
    toogleState: false,
  },
  reducers: {
    toogleMenu: (state) => {
      state.toogleState = !state.toogleState;
    },
    offToggle: (state) => {
      state.toogleState = false;
    },
    onToogle: (state) => {
      state.toogleState = true;
    },
  },
});

export const { toogleMenu, offToggle, onToogle } = toogleSlice.actions;
export default toogleSlice.reducer;
