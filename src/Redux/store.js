import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Categories Slice/CategoriesSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;
