import axios from 'axios';

const api = axios.create(
    {
        baseURL: 'http://localhost:8000',
        timeout: 3000
    }
);

const token = 'contradEDictionFix';

api.interceptors.request.use((config) => {
    config.headers["Authorization"] = "Bearer " + token;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;