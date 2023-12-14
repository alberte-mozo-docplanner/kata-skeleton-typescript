Leap Year Kata
==============

Based on <https://www.codurance.com/katas/leap-year>.

Implement a method that checks if a year is a leap year.

[ ] A year is not a leap year if not divisible by 4 (e.g. 2023, 1111)

[ ] A year is a leap year if divisible by 4 (e.g. 2024, 2020)

[ ] A year is not a leap year if divisible by 100 (e.g. 1800, 1900)

[ ] A year is a leap year if divisible by 400 (e.g. 2000, 1600)

```typescript
const year: Year = new Year(2024);
year.isLeapYear(): bool; // true
```