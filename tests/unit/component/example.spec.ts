import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { createDefaultOptions } from '../../helper/createDefaultOptions';
import { AppContext } from '@/AppContext';

describe('HelloWorld.vue', () => {
    it('should render HelloWorld well', () => {
        const wrapper = mount(HelloWorld, createDefaultOptions());
        expect(wrapper.element).toMatchSnapshot();
    });

    it('should push shortenUrl well', async () => {
        jest.spyOn(AppContext.apiExecutor, 'getShortenUrl').mockResolvedValue({
            data: {
                'picseeUrl': 'https://test/454545'
            },
            meta: {
                'version': 'v0.0.1',
                'request': {
                    'url': 'https://test/454545',
                    'query': {
                        'access_token': 'test-token',
                        'url': 'https://test/454545',
                        'externalId': ''
                    }
                }
            }
        });
        const wrapper = mount(HelloWorld, createDefaultOptions());
        await wrapper.vm.generateUrl();

        expect(wrapper.vm.shortenUrls[0].shortenUrl).toBe(
            'https://test/454545'
        );
    });
});
