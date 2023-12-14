import {Year} from "../src/year";

describe('leap year', (): void => {
    it('is instantiable', () => {
        new Year();
    });
    it('responds to messages asking if it is a leap year', () => {
        const year: Year = new Year();
        year.isLeap();
    });
});