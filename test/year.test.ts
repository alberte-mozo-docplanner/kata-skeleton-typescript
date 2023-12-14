import { Year } from "../src/year";

describe('leap year', (): void => {
    function AssertRegularYear(expectedYear: number) {
        const year: Year = new Year(expectedYear)
        const result: boolean = year.isLeap();
        expect(result).toBe(false);
    }

    it('Identifies regular years', () => {
        AssertRegularYear(2023);
        AssertRegularYear(2011);
    })

    it('Identifies leap years', () => {
        const year: Year = new Year(2024)
        const result: boolean = year.isLeap();
        expect(result).toBe(true);

        const year2: Year = new Year(2020)
        const result2: boolean = year2.isLeap();
        expect(result2).toBe(true);
    })
});