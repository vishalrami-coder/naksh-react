

import { fetchAPI } from "./api";

export const getBlogs = () => {
    return fetchAPI(`?resource=blogs`); // endpoint change karo as per API
};

export const getBlogDetails = (blogDetailsSlug) => {
    return fetchAPI(`?resource=blogs&slug=${blogDetailsSlug}`);
};

export const getBlogsCategories = async () => {
    const res = await fetchAPI(`?resource=blog_categories`);
    return res;
};

export const getBlogsByCategory = (slug) => {
    return fetchAPI(`?resource=blogs&category=${slug}`);
};