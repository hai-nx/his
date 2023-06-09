import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    // baseURL: import.meta.env.VUE_APP_API_BASE_URL,
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    // paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    const { params } = config;
    if (params && Object.keys(params).length !== 0) {
        config.paramsSerializer = (params) => queryString.stringify(params);
    }

    // Handle token here ...
    return config;
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});
export default axiosClient;