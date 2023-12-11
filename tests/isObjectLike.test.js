import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {
  it('should return true for object-like values', () => {
    expect(isObjectLike({})).toBe(true);
    expect(isObjectLike([])).toBe(true);
    expect(isObjectLike(new Date())).toBe(true);
    expect(isObjectLike({ key: 'value' })).toBe(true);
  });

  it('should return false for non-object-like values', () => {
    expect(isObjectLike(null)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(42)).toBe(false);
    expect(isObjectLike('string')).toBe(false);
    expect(isObjectLike(true)).toBe(false);
  });
});
