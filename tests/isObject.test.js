import isObject from '../src/isObject';

describe('isObject function', () => {
    test('returns true for an object literal', () => {
        const result = isObject({});
        expect(result).toBe(true);
    });

    test('returns true for an array', () => {
        const result = isObject([1, 2, 3]);
        expect(result).toBe(true);
    });

    test('returns true for a function', () => {
        const result = isObject(() => { });
        expect(result).toBe(true);
    });

    test('returns false for null', () => {
        const result = isObject(null);
        expect(result).toBe(false);
    });

    test('returns false for undefined', () => {
        const result = isObject(undefined);
        expect(result).toBe(false);
    });

    test('returns true for a custom object instance', () => {
        class CustomObject { }
        const result = isObject(new CustomObject());
        expect(result).toBe(true);
    });
});
