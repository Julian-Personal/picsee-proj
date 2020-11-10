import { ApiExecutor } from '@/api/ApiExecutor';

let apiExecutor: ApiExecutor;

export class AppContext {
    public static get apiExecutor(): ApiExecutor {
        if (!apiExecutor) {
            apiExecutor = new ApiExecutor();
        }

        return apiExecutor;
    }
}
