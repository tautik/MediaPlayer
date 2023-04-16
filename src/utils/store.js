import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";

const store = configureStore({
  reducer: {
    toogle: toogleSlice,
  },
});

export default store;
