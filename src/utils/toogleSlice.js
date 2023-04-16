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
  },
});

export const { toogleMenu } = toogleSlice.actions;
export default toogleSlice.reducer;
