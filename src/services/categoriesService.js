import { fetchAPI } from "./api";

export const getCategories = (slug) => {
    return fetchAPI(`?resource=categories&parent_id=${slug}`);
};