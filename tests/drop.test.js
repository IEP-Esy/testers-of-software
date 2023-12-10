import drop from '../src/drop';

describe('drop method', () => {
    test('drops the first element from the array', () => {
        const result = drop([1, 2, 3]);
        expect(result).toEqual([2, 3]);
    });

    test('drops specified number of elements from the array', () => {
        const result = drop([1, 2, 3, 4], 2);
        expect(result).toEqual([3, 4]);
    });

    test('returns an empty array when dropping more elements than available', () => {
        const result = drop([1, 2, 3], 5);
        expect(result).toEqual([]);
    });

    test('returns the original array when dropping 0 elements', () => {
        const result = drop([1, 2, 3], 0);
        expect(result).toEqual([1, 2, 3]);
    });

    test('handles null array gracefully', () => {
        const result = drop(null, 2);
        expect(result).toEqual([]);
    });

    test('handles undefined array gracefully', () => {
        const result = drop(undefined, 2);
        expect(result).toEqual([]);
    });

    test('treats negative n as zero and drops no elements from the array', () => {
        const result = drop([1, 2, 3], -2);
        expect(result).toEqual([1, 2, 3]);
    });

    test('drops the first item from the cart array', () => {
        const cart = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
        const result = drop(cart);
        expect(result).toEqual([{ id: 2, name: 'Product 2' }]);
    });

    test('drops two items from the cart array', () => {
        const cart = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }, { id: 3, name: 'Product 3' }];
        const result = drop(cart, 2);
        expect(result).toEqual([{ id: 3, name: 'Product 3' }]);
    });
});