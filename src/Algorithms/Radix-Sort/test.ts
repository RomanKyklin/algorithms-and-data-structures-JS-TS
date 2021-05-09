import {digitCount, getDigit, radixSort} from "./index";

describe("radix sort", () => {
    it("digit count test, should return count of digits at giver number", () => {
        expect(digitCount(1234)).toEqual(4);
        expect(digitCount(234)).toEqual(3);
        expect(digitCount(34)).toEqual(2);
        expect(digitCount(4)).toEqual(1);
    })

    it("get digit helper test, should return number at given position", () => {
        expect(getDigit(1234, 1)).toEqual(3);
        expect(getDigit(1234, 2)).toEqual(2);
        expect(getDigit(1234, 3)).toEqual(1);
        expect(getDigit(1234, 4)).toEqual(0);
    })

    it("should sort correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(radixSort(nums)).toEqual(expectedResult);
    });
});
