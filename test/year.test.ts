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
});