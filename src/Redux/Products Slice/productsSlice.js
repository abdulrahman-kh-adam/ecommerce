import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: null,
  loading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProductsPage.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.loading = false;
      });
  },
});

export const getAllProducts = createAsyncThunk(
  "productsSlice/getAllProducts",
  async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/products?populate[0]=thumb&populate[1]=images`
    );
    const res = await req.json();
    return res;
  }
);

export const getProductsPage = createAsyncThunk(
  "productsSlice/getProductsPage",
  async (page) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/products?populate[0]=thumb&populate[1]=images&pagination[page]=${page}&pagination[pageSize]=24`
    );
    const res = await req.json();
    return res;
  }
);

export const getProductById = createAsyncThunk(
  "productsSlice/getProductById",
  async (id) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/products/${id}?populate[0]=thumb&populate[1]=images`
    );
    const res = await req.json();
    return res;
  }
);

export default productsSlice.reducer;
