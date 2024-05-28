import axios from 'axios';
import queryString from 'query-string';
import { useAuth } from '@/stores/auth';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});
axiosInstance.interceptors.request.use(async (config) => {
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
axiosInstance.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, async error => {
    const originalConfig = error.config;

    if (originalConfig.url !== "api/Login/Authenticate" && error.response) {
        // Access Token was expired
        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const store = useAuth();
                const rs = await axiosInstance.post("api/Login/Refreshtoken", {
                    acceptToken: store.accessToken,
                    refreshToken: store.refreshToken,
                });

                if (rs && rs.data.isSuccessed) {
                    store.accessToken = rs.data.result.acceptToken;
                }

                return axiosInstance(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
    }

    return Promise.reject(error);
});

export default axiosInstance;