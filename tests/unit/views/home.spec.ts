import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { createDefaultOptions } from '../../helper/createDefaultOptions';

describe('Home.vue', () => {
    it('should render Home well', () => {
        const wrapper = mount(Home, createDefaultOptions());
        expect(wrapper.element).toMatchSnapshot();
    });
});
