import { ActionContext } from 'vuex';

type ArgumentTypes<F> = F extends (payload: infer A) => any ? A : never;

type ActionReturnType = Promise<any> | Promise<void> | void;

export type VuexActions<T, S, R = any> = {
    [K in keyof T]: (
        context: ActionContext<S, R>,
        payload?: ArgumentTypes<T[K]>
    ) => ActionReturnType;
};

export type VuexMutations<T, S> = {
    [K in keyof T]: (context: S, payload: ArgumentTypes<T[K]>) => void;
};
