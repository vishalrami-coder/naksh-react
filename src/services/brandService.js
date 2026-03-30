import { fetchAPI } from "./api";

export const getBrand = () => {
  return fetchAPI("?resource=brands"); // endpoint change karo as per API
};