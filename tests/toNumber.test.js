import toNumber from '../src/toNumber';

describe('toNumber method', () => {
    test('converts a symbol to a number', () => {
        const result = toNumber(Symbol('test1'));
        expect(result).toBe(NaN);
    });

    it('handles string values after object processing', () => {
        const customObject = {
            valueOf: function () {
                return '42';
            },
        };
        expect(toNumber(customObject)).toBe(42);
    });

    it('handles binary string values', () => {
        expect(toNumber('0b101')).toBe(5);
    });

    it('handles octal string values', () => {
        expect(toNumber('0o10')).toBe(8);
    });

    it('handles bad signed hexadecimal string values', () => {
        expect(toNumber('-0xabc')).toBeNaN();
    });

    it('handles objects with valueOf method returning an object', () => {
        const customObject = {
            valueOf: function () {
                return { nested: 42 };
            },
        };
        expect(toNumber(customObject)).toBe(NaN);
    });
});