import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice/categoriesSlice";
import productsSlice from "./poductsSlice/productsSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
