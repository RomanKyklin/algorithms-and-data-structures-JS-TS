import {merge, mergeSort} from "./index";

describe("merge sort", () => {
    it('should merge sorted arrays into one sorted array', () => {
        const firstArray = [1, 2, 3, 4];
        const secondArray = [8, 9, 10];
        const expectedResult = [1, 2, 3, 4, 8, 9, 10];

        expect(merge(firstArray, secondArray)).toEqual(expectedResult);
    })

    it("should sort array with single element correctly", () => {
        const nums = [10];
        const expectedResult = [10];
        expect(mergeSort(nums)).toEqual(expectedResult);
    });

    it("should sort array correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(mergeSort(nums)).toEqual(expectedResult);
    });
});
