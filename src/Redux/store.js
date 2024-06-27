import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Categories Slice/CategoriesSlice";
import brandsReducer from "./Brands Slice/brandsSlice";
import productsReducer from "./Products Slice/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    brands: brandsReducer,
    products: productsReducer,
  },
});

export default store;
