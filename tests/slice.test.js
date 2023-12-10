import slice from '../src/slice';

describe('slice method', () => {
    test('returns a slice of the array from start to end', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, 2);
        expect(result).toEqual([3, 4]);
    });

    test('handles negative start index as an offset from the end', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, -2);
        expect(result).toEqual([3, 4]);
    });

    test('handles negative end index as an offset from the end', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, 1, -1);
        expect(result).toEqual([2, 3]);
    });

    test('returns an empty array for an empty input array', () => {
        const inputArray = [];
        const result = slice(inputArray, 1, 3);
        expect(result).toEqual([]);
    });

    test('returns an empty array for a null input array', () => {
        const result = slice(null, 1, 3);
        expect(result).toEqual([]);
    });

    test('returns an empty array when start is greater than or equal to end', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, 2, 2);
        expect(result).toEqual([]);
    });

    test('handles null start index correctly', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, null, 4);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    test('handles negative start index correctly', () => {
        const inputArray = [1, 2, 3, 4];
        const result = slice(inputArray, -6, 4);
        expect(result).toEqual([1, 2, 3, 4]);
    });
});
