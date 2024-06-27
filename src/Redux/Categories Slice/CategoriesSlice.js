import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {},
  loading: true,
  currentCategory: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategoriesPage.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.currentCategory = action.payload;
        state.loading = false;
      });
  },
});

export const getAllCategories = createAsyncThunk(
  "categoriesSlice/getAllCategories",
  async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/categories?populate[0]=image`
    );
    const res = await req.json();
    return res;
  }
);

export const getCategoriesPage = createAsyncThunk(
  "categoriesSlice/getCategoriesPage",
  async (page) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/categories?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=12`
    );
    const res = await req.json();
    return res;
  }
);

export const getCategoryById = createAsyncThunk(
  "categoriesSlice/getCategoryById",
  async (id) => {
    if (!id) {
      return {};
    }
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/${id}`
    );
    const res = await req.json();
    return res;
  }
);

export default categoriesSlice.reducer;
