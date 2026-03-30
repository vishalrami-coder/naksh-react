import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchResults } from "../../services/searchService";

// 🔥 API CALL
export const fetchSearch = createAsyncThunk(
    "search/fetchSearch",
    async (query, { rejectWithValue }) => {
        try {
            const res = await getSearchResults(query);
            return Array.isArray(res) ? res : res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearSearch: (state) => {
            state.data = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;