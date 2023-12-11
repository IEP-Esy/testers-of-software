import isDate from '../src/isDate';

describe('isDate', () => {
    it('should return true for a valid Date object', () => {
        const validDate = new Date();
        const result = isDate(validDate);
        expect(result).toBe(true);
    });

    it('should return false for a string representing a date', () => {
        const dateString = 'Mon April 23 2012';
        const result = isDate(dateString);
        expect(result).toBe(false);
    });
});
