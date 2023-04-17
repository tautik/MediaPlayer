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
  },
});

export const { toogleMenu, offToggle } = toogleSlice.actions;
export default toogleSlice.reducer;
