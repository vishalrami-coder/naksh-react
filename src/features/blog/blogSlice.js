import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs, getBlogDetails, getBlogsCategories, getBlogsByCategory } from "../../services/blogService";

// 🔥 Blog List
export const fetchBlogs = createAsyncThunk(
    "blog/fetchBlogs",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getBlogs();
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// 🔥 Blog Details
export const fetchBlogDetails = createAsyncThunk(
    "blog/fetchBlogDetails",
    async (slug, { rejectWithValue }) => {
        try {
            const res = await getBlogDetails(slug);
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// 🔥 Blog Categories
export const fetchBlogsCategories = createAsyncThunk(
    "blog/fetchBlogsCategories",
    async (_, { rejectWithValue }) => {
        try {
            const res = await getBlogsCategories();
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// 🔥 Blog Details
export const fetchCategoriesListing = createAsyncThunk(
    "blog/fetchCategoriesListing", // ✅ UNIQUE NAME
    async (slug, { rejectWithValue }) => {
        try {
            const res = await getBlogsByCategory(slug); // or category-wise API
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        categoryBlogs: [], // ✅ ADD THIS
        blogDetails: null,
        blogsCategories: [],
        loadingBlogs: false,
        loadingDetails: false,
        loadingCategories: false,
        loadingCategoryBlogs: false, // ✅ ADD THIS
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            // LIST
            .addCase(fetchBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // DETAILS
            .addCase(fetchBlogDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.blogDetails = action.payload;
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Categories Listing
            .addCase(fetchBlogsCategories.pending, (state) => {
                state.loadingCategories = true;
            })
            .addCase(fetchBlogsCategories.fulfilled, (state, action) => {
                state.loadingCategories = false;
                state.blogsCategories = action.payload;
            })
            .addCase(fetchBlogsCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Blog Categories Listing
            .addCase(fetchCategoriesListing.pending, (state) => {
                state.loadingCategoryBlogs = true;
            })
            .addCase(fetchCategoriesListing.fulfilled, (state, action) => {
                state.loadingCategoryBlogs = false;
                state.categoryBlogs = action.payload;
            })
            .addCase(fetchCategoriesListing.rejected, (state, action) => {
                state.loadingCategoryBlogs = false;
                state.error = action.payload;
            });
    },
});

export default blogSlice.reducer;