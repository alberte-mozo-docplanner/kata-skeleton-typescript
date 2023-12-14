import { Year } from "../src/year";

describe('leap year', (): void => {
    it('isLeap returns a boolean response', () => {
        const year: Year = new Year(1996);
        const result = year.isLeap();
        expect(typeof result).toBe('boolean');
    });

    it('Year constructor should accept a number', () => {
        const year = new Year(2023)
    })
});