import { AxiosInstance, AxiosRequestConfig } from 'axios';

// set axios config
export function setInterceptors(service: AxiosInstance): void {
    service.interceptors.request.use((config: AxiosRequestConfig) => {
        return config;
    });

    service.interceptors.response.use(
        response => {
            return response.data;
        },
        error => {
            return Promise.reject(error);
        }
    );
}
