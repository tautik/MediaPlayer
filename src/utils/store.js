import { configureStore } from "@reduxjs/toolkit";
import toogleSlice from "./toogleSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    toogle: toogleSlice,
    chat: chatSlice,
  },
});

export default store;
