import axios, { AxiosInstance } from 'axios';
import { setInterceptors } from '@/api/interceptor';
import { postLink } from '@/types/request/post';
import {GetUrlResponse, PostUrlResponse} from '@/types/response';

interface ApiService extends AxiosInstance {
    get<T>(...args: any): Promise<T>;
    post<T>(...args: any): Promise<T>;
    update<T>(...args: any): Promise<T>;
    delete<T>(...args: any): Promise<T>;
}

export class ApiExecutor {
    public readonly service: ApiService;

    get getToken(): string {
        return '20f07f91f3303b2f66ab6f61698d977d69b83d64';
    }

    constructor() {
        this.service = axios.create({
            baseURL: process.env.VUE_APP_BASE_API,
            timeout: 30000
        }) as ApiService;
        setInterceptors(this.service);
    }

    public getShortenUrl(params: postLink): Promise<GetUrlResponse> {
        return this.service.post<GetUrlResponse>(
            `/links/?access_token=${this.getToken}`,
            params
        );
    }

    public modifyShortenUrl(encodeId: string, url: string): Promise<PostUrlResponse> {
        return this.service.post<PostUrlResponse>(
            `/links/${encodeId}/url?access_token=${this.getToken}&caller=client-simple&lang=zh-tw`,
            {
                value: url
            }
        );
    }
}
