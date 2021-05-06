import {mergeSort} from "./index";

describe("merge sort", () => {
    it("should sort correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(mergeSort(nums)).toEqual(expectedResult);
    });
});
