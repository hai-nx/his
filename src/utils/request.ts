import axios from 'axios';
import queryString from 'query-string';

const request = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

request.interceptors.request.use(async (config) => {
    const { params } = config;
    if (params && Object.keys(params).length !== 0) {
        config.paramsSerializer = (params) => queryString.stringify(params);
    }

    // Handle token here ...
    return config;
});

request.interceptors.response.use(response => {
    return response;
}, error => {
    throw error;
});

export default request;