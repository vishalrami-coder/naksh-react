import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../features/brand/brandSlice";
import categoriesReducer from "../features/categories/CategoriesSlice";
import brandDetailsReducer from "../features/brandDetails/brandDetailSlice";
import searchReducer from "../features/searchSlice/searchSlice";


export const store = configureStore({
    reducer: {
        brand: brandReducer,
        categories: categoriesReducer,
        brandDetails: brandDetailsReducer,
        search: searchReducer,
    },
});