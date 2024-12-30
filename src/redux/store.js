import { configureStore } from "@reduxjs/toolkit";
import whetherReducer from "./whetherappslice";

export const store = configureStore({
  reducer: {
    whether: whetherReducer,
  },
});
