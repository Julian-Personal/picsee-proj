import Vue from 'vue';
import Vuex, { ModuleTree, Store } from 'vuex';
import { GlobalState } from '@/types/store/state/GlobalState';
import VuexPersistence from 'vuex-persist';
import info from './modules/info';

Vue.use(Vuex);

export function createStore(): Store<GlobalState> {
    const localStorage = new VuexPersistence<GlobalState>({
        storage: window.localStorage,
        modules: ['info']
    });

    return new Vuex.Store<GlobalState>({
        modules: { info } as ModuleTree<GlobalState>,
        plugins: [localStorage.plugin]
    });
}
