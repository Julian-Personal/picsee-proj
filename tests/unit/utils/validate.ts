import { validateUrl } from '@/utils/validate';

describe('validate.ts', () => {
    it('should validate url', () => {
        expect(validateUrl('https://test.url/1343')).toBe(true);
        expect(validateUrl('test.url/1343')).toBe(false);
    });
});
