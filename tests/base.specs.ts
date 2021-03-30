import { add } from '../src';

describe('Simple expression tests', () => {
    test('Check addition', () => {
        expect(add(1, 2)).toBe(3);
    });
});
