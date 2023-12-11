import capitalize from '../src/capitalize';

describe('capitalize method', () => {
  it('capitalizes the first character and converts the rest to lower case', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('john')).toBe('John');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles single character string', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('Z')).toBe('Z');
  });

  it('handles non-alphabetic characters', () => {
    expect(capitalize('123')).toBe('123');
    expect(capitalize('$test')).toBe('$test');
  });
});
