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
