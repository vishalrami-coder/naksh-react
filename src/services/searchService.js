import { fetchAPI } from "./api";

export const getSearchResults = (productSlug) => {
    return fetchAPI(`?resource=search&q=${productSlug}&limit=10`);
};