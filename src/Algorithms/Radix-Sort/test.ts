import {getDigit, radixSort} from "./index";

describe("radix sort", () => {
    it("get digit helper test, should return number at given position", () => {
        expect(getDigit(100, 1)).toEqual(1);
        expect(getDigit(103, 2)).toEqual(0);
        expect(getDigit(103, 3)).toEqual(3);
        expect(getDigit(103, 4)).toEqual(null);
    })

    it("should sort correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(radixSort(nums)).toEqual(expectedResult);
    });
});
