export class Year {

    year: number

    constructor(year: number) {
        this.year = year
    }

    isLeap(): boolean {
        if (this.year % 4 === 0)
            return true;

        return false;
    }
}