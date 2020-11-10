import {
    createLocalVue,
    ThisTypedMountOptions,
    ThisTypedShallowMountOptions,
    VueTestUtilsConfigOptions
} from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from '../../src/plugins/vuetify';
import store from "../../src/plugins/store";
import router from '../../src/router';

export type ComponentOptions<T = any> = (
    | ThisTypedMountOptions<any>
    | ThisTypedShallowMountOptions<any>
) &
    VueTestUtilsConfigOptions;

function mergeStubs(options: ComponentOptions): void {
    options.stubs = options.stubs || {};
    Object.assign(options.stubs, { transition: false });
}

export function createDefaultOptions<V extends Vue>(
    options = {} as ComponentOptions<V>
): ComponentOptions<V> {
    const localVue = createLocalVue();

    mergeStubs(options);
    (!options.mocks || (!options.mocks.$route && !options.mocks.$router)) &&
        localVue.use(VueRouter);

    return { localVue, vuetify, router, store, ...options };
}
