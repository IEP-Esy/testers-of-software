import toInteger from '../src/toInteger';

describe('toInteger method', () => {
    test('converts a positive number to integer', () => {
        const result = toInteger(42.75);
        expect(result).toBe(42);
    });
});