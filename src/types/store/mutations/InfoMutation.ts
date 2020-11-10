export interface InfoMutations {
    UPDATE_URL_HISTORY(urls: Array<{ url: string; shortenUrl: string }>): void;
    // UPDATE_TOKEN(token: string): void;
}
