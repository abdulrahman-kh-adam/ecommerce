import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
  loading: true,
  currentBrand: {},
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
      })
      .addCase(getBrandsPage.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.loading = false;
      })
      .addCase(getBrandById.fulfilled, (state, action) => {
        state.currentBrand = action.payload;
        state.loading = false;
      });
  },
});

export const getAllBrands = createAsyncThunk(
  "brandsSlice/getAllBrands",
  async () => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/brands?populate[0]=image`
    );
    const res = await req.json();
    return res;
  }
);

export const getBrandsPage = createAsyncThunk(
  "brandsSlice/getBrandsPage",
  async (page) => {
    const req = await fetch(
      `${process.env.REACT_APP_API_URL}/brands?populate[0]=image&pagination[page]=${page}&pagination[pageSize]=12`
    );
    const res = await req.json();
    return res;
  }
);

export const getBrandById = createAsyncThunk(
  "brandsSlice/getBrandById",
  async (id) => {
    if (!id) {
      return {};
    }
    const req = await fetch(`${process.env.REACT_APP_API_URL}/brands/${id}`);
    const res = await req.json();
    return res;
  }
);

export default brandsSlice.reducer;
