import endsWith from '../src/endsWith';

describe('endsWith function', () => {
    test('returns true if a product name ends with "Shoes"', () => {
        const productName = 'Running Shoes';
        const result = endsWith(productName, 'Shoes');
        expect(result).toBe(true);
    });

    test('returns false if a product name does not end with "Hat"', () => {
        const productName = 'Winter Jacket';
        const result = endsWith(productName, 'Hat');
        expect(result).toBe(false);
    });

    test('returns true if a URL ends with "/checkout"', () => {
        const url = 'https://example.com/shop/checkout';
        const result = endsWith(url, '/checkout');
        expect(result).toBe(true);
    });

    test('returns true when checking an empty string for an empty target', () => {
        const result = endsWith('', '');
        expect(result).toBe(true);
    });

    test('handles negative position correctly', () => {
        const result = endsWith('abcdef', 'a', -3);
        expect(result).toBe(false);
    });

    test('adjusts position to string length when position is greater', () => {
        const inputString = 'abcdef';
        const target = 'ef';

        // Set position greater than the length of the string
        const position = inputString.length + 2;

        const result = endsWith(inputString, target, position);
    
        // Expect the function to adjust position to the length of the string
        expect(result).toBe(true);
    });
});
