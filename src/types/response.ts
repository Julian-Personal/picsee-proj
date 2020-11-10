export type GetUrlResponse = {
    data: {
        picseeUrl: string;
    };
    meta: {
        version: string;
        request: {
            url: string;
            query: {
                access_token: string;
                url: string;
                externalId: string;
            };
        };
    };
};

export type PostUrlResponse = {
    data: {
        result: string;
    };
    meta: {
        version: string;
        request: {
            url: string;
            query: {
                access_token: string;
                value: string;
            }
        };
    };
    requestCount: number;
};

export type UrlStructure = {
    url: string;
    shortenUrl: string;
};
