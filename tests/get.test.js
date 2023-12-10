import get from '../src/get';

describe('get', () => {
    const object = {
        a: {
            b: {
                c: 42,
            },
        },
        x: [1, 2, { y: 'value' }],
    };

    it('gets nested property using dot notation', () => {
        expect(get(object, 'a.b.c')).toBe(42);
    });

    it('returns default value for undefined property', () => {
        expect(get(object, 'a.b.d', 'default')).toBe('default');
    });

    it('returns default for null object', () => {
        expect(get(null, 'a.b.d', 'default')).toBe('default');
    });
});