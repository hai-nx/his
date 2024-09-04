import axios from 'axios';
import queryString from 'query-string';
import { useAuth } from '@/store';

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
    const token = store.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});
request.interceptors.response.use(response => {
    return response;
}, async error => {
    const originalConfig = error.config;

    if (originalConfig.url !== "api/Login/Authenticate" && originalConfig.url !== "api/Authorization/Login" && error.response && !originalConfig._retry) {
        // Access Token was expired
        if (error.response.status === 401) {
            originalConfig._retry = true;
            try {
                const store = useAuth();
                const rs = await request.post("api/Login/Refreshtoken", {
                    acceptToken: store.accessToken,
                    refreshToken: store.refreshToken,
                });

                if (rs && rs.data.isSuccessed) {
                    store.accessToken = rs.data.result.acceptToken;
                    store.refreshToken = rs.data.result.refreshToken;
                }

                return request(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
        else if (error.response.status === 403 && error.response.data === "Miss session") {
            originalConfig._retry = true;
            try {
                const store = useAuth();
                store.reLoginAsync(store.user.username, store.user.password);
                return request(originalConfig);
            }
            catch (_error) {
                return Promise.reject(_error);
            }
        }
    }

    return Promise.reject(error);
});

export default request;