import add from '../src/add';

describe('add method', () => {
  // Test with legal positive values
  test('adds two positive numbers', () => {
    expect(add(3, 4)).toBe(7);
  });

  // Test with legal positive and negative values
  test('adds a positive and a negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  // Test with positive number and zero
  test('adds a positive number to zero', () => {
    expect(add(8, 0)).toBe(8);
  });

  // Test with negative number and zero
  test('adds a negative number to zero', () => {
    expect(add(0, -5)).toBe(-5);
  });

  // Test with both parameter being 0
  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  // test with both parameter being negative
  test('adds two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  // test with an undefined parameter with legal value
  test('handles undefined values with default value', () => {
    expect(add(undefined, 5)).toBe(5);
    expect(add(3, undefined)).toBe(3);
  });

  // Test with one null parameter
  test('adds null + 0 to equal 0', () => {
    expect(add(null, 0)).toBe(0);
  });

  // Test with both null parameters
  test('adds null + null to equal 0', () => {
    expect(add(null, null)).toBe(0);
  });

  // test with symbols for parameters
  test('returns NaN for symbol values', () => {
    const symbol1 = Symbol('test1');
    const symbol2 = Symbol('test2');
    expect(add(symbol1, 10)).toBe(NaN);
    expect(add(20, symbol2)).toBe(NaN);
  });

  // test with objects for parameters
  test('returns NaN for object values', () => {
    const object1 = { name: 'test1', value: 3 };
    const object2 = { name: 'test2', value: 5 };
    expect(add(object1, 10)).toBe(NaN);
    expect(add(20, object2)).toBe(NaN);
  });
});