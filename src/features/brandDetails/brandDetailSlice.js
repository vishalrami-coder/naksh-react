import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBrandDetails } from "../../services/brandDetailsService";

// 🔥 API CALL (slug ya id pass karega)
export const fetchBrandDetails = createAsyncThunk(
  "brandDetails/fetchBrandDetails",
  async (slug, { rejectWithValue }) => {
    try {
      const res = await getBrandDetails(slug);

      // response normalize
      return Array.isArray(res) ? res[0] : res.data || res;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || error.message
      );
    }
  }
);

const brandDetailsSlice = createSlice({
  name: "brandDetails",
  initialState: {
    data: null,     // 👈 single object
    loading: false,
    error: null,
  },

  reducers: {
    // optional reset (useful when navigating)
    clearBrandDetails: (state) => {
      state.data = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrandDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBrandDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBrandDetails } = brandDetailsSlice.actions;
export default brandDetailsSlice.reducer;