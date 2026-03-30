import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "../features/brand/brandSlice";
import categoriesReducer from "../features/categories/CategoriesSlice";
import brandDetailsReducer from "../features/brandDetails/brandDetailSlice";

export const store = configureStore({
    reducer: {
        brand: brandReducer,
        categories: categoriesReducer,
        brandDetails: brandDetailsReducer,
    },
});