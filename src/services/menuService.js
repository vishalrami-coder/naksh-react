

import { fetchAPI } from "./api";

export const getMenu = () => {
    return fetchAPI(`?resource=menu&q=`); // endpoint change karo as per API
};