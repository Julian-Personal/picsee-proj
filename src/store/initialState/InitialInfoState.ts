import { InfoState } from '@/types/store/state/InfoState';

export const initialModalState = (): InfoState => {
    return {
        shortenUrls: [],
        token: ''
    };
};
