import filter from '../src/filter';

describe('filter method', () => {
    test('filters out out-of-stock products from an array of products', () => {
        const products = [
            { id: 1, name: 'Product A', inStock: true },
            { id: 2, name: 'Product B', inStock: false },
            { id: 3, name: 'Product C', inStock: true }
        ];

        const result = filter(products, ({ inStock }) => inStock);
        expect(result).toEqual([{ id: 1, name: 'Product A', inStock: true }, { id: 3, name: 'Product C', inStock: true }]);
    });

    test('filters products by category from an array of products', () => {
        const products = [
            { id: 1, name: 'Product A', category: 'Electronics' },
            { id: 2, name: 'Product B', category: 'Clothing' },
            { id: 3, name: 'Product C', category: 'Electronics' }
        ];

        const result = filter(products, ({ category }) => category === 'Electronics');
        expect(result).toEqual([{ id: 1, name: 'Product A', category: 'Electronics' }, { id: 3, name: 'Product C', category: 'Electronics' }]);
    });

    test('returns an empty array when the inventory is empty', () => {
        const result = filter([], ({ inStock }) => inStock);
        expect(result).toEqual([[]]);
    });

    test('returns an empty array when the inventory is null', () => {
        const result = filter(null, ({ inStock }) => inStock);
        expect(result).toEqual([[]]);
    });

    test('returns an empty array when the inventory is undefined', () => {
        const result = filter(undefined, ({ inStock }) => inStock);
        expect(result).toEqual([[]]);
    });
});