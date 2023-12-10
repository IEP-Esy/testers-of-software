import toFinite from '../src/toFinite';

describe('toFinite method', () => {
    test('converts zero to finite number', () => {
        const result = toFinite(0);
        expect(result).toBe(0);
    });

    test('converts Infinity to the maximum finite number', () => {
        const result = toFinite(Infinity);
        expect(result).toBe(Number.MAX_VALUE);
    });

    test('converts -Infinity to the minimum finite number', () => {
        const result = toFinite(-Infinity);
        expect(result).toBe(-Number.MAX_VALUE);
    });

    test('converts a string representing a number to finite number', () => {
        const result = toFinite('123.45');
        expect(result).toBe(123.45);
    });

    test('converts a non-numeric string to zero', () => {
        const result = toFinite('abc');
        expect(result).toBe(0);
    });

    test('converts null to zero', () => {
        const result = toFinite(null);
        expect(result).toBe(0);
    });
});
