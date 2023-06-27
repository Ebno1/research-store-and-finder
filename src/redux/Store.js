import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User";

const mainStore =  configureStore({
  reducer: { 
    authenticate : UserSlice.reducer
  },
});

export default mainStore;