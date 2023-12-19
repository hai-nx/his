import axios from 'axios';
import queryString from 'query-string';
import { useAuth } from '@/stores/auth';

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
    const store = useAuth();
    const token = store.user.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
/* eslint-disable */
request.interceptors.response.use(response => {
    return response;
}, async error => {
    const originalConfig = error.config;
    debugger;
    if (originalConfig.url !== "api/Login/Authenticate" && error.response) {
        // Access Token was expired
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const store = useAuth();
                const rs = await request.post("api/Login/Refreshtoken", {
                    acceptToken: store.user.token,
                    refreshToken: store.user.refreshToken,
                });

                if (rs && rs.data.isSuccessed) {
                    store.user.token = rs.data.result.acceptToken;
                }

                return request(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }

    return Promise.reject(error);
});

export default request;