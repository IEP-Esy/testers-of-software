import toString from '../src/toString';

describe('toString', () => {
    it('converts a string', () => {
        expect(toString('test')).toBe('test');
    });

    it('converts an array', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    it('converts an array recursively', () => {
        expect(toString([1, [2, [3]]])).toBe('1,2,3');
    });

    it('converts a symbol to its string representation', () => {
        const sym = Symbol('test');
        expect(toString(sym)).toBe(sym.toString());
    });

    it('handles -0 correctly', () => {
        expect(toString(-0)).toBe('-0');
    });
});