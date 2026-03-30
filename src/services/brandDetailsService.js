import { fetchAPI } from "./api";

export const getBrandDetails = (ProductSlug) => {
  return fetchAPI(`?resource=products&slug=${ProductSlug}`); // endpoint change karo as per API
};
