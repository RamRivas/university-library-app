import axios from "axios";
import { BACKEND_BASE_URL } from "../config";

const refreshToken = async () => {
    try {
        const resp = await axios.post("/token", {
            token: localStorage.refreshToken
        });
        console.log("refresh token", resp.data);
        return resp.data;
    } catch (e) {
        console.log("Error",e);   
    }
};

export default axios.create({
    baseURL: BACKEND_BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BACKEND_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

axiosPrivate.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers["Authorization"] = ` bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
    
axiosPrivate.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            const resp = await refreshToken();
            
            const access_token = resp.response.accessToken;
                
            localStorage.setItem('access_token', access_token);
            axiosPrivate.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${access_token}`;
            return axiosPrivate(originalRequest);
        }
        return Promise.reject(error);
    }
);