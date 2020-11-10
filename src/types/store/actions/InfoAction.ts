import { UrlStructure } from '@/types/response';

export interface InfoActions {
    // setToken(token: string): void;
    setShortenUrls(urlInfos: UrlStructure): void;
}
