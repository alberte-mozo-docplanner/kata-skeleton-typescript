import {Year} from "../src/year";

describe('leap year', (): void => {
    it('isLeap returns a boolean response', () => {
        const year: Year = new Year();
        const result = year.isLeap();
        expect(typeof result).toBe('boolean');
    });
});