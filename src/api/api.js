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


axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    if (error.response) {
        error.message = `Error from server: status: ${error.response.status} ~ message: ${error.response.statusText}`;
    }
    return Promise.reject(error)
});

export default api;