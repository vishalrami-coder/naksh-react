import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categoriesService";

// 🔥 API CALL
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (slug, { rejectWithValue }) => {
    try {
      const res = await getCategories(slug);
      return Array.isArray(res) ? res : res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;