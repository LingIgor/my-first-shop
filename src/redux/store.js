import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice/categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
  devTools: true,
});
