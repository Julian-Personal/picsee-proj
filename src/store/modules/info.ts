import { InfoState } from '@/types/store/state/InfoState';
import { GetterTree } from 'vuex';
import { VuexActions, VuexMutations } from '@/types/store/VuexTypes';
import { initialModalState } from '@/store/initialState/InitialInfoState';
import { InfoActions } from '@/types/store/actions/InfoAction';
import { InfoMutations } from '@/types/store/mutations/InfoMutation';
import { UrlStructure } from '@/types/response';

const state: InfoState = initialModalState();

const getters: GetterTree<InfoState, any> = {
    // token: ({ token }) => token,
    shortenUrls: ({ shortenUrls }) => shortenUrls
};

const actions: VuexActions<InfoActions, InfoState> = {
    // setToken({ commit }, token) {
    //     commit('UPDATE_TOKEN', token);
    // },

    setShortenUrls({ commit }, urlInfos) {
        commit('UPDATE_URL_HISTORY', urlInfos);
    }
};

const mutations: VuexMutations<InfoMutations, InfoState> = {
    // UPDATE_TOKEN(state, token: string) {
    //     state.token = token;
    // },

    UPDATE_URL_HISTORY(state, urls: Array<UrlStructure>) {
        state.shortenUrls = state.shortenUrls.concat(urls);
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
