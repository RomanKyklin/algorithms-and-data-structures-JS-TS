import {binarySearch} from "./index";

describe("binary search", () => {
    it("should search correctly", () => {
        const nums = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const strings = ['a', 'b', 'c', 'd', 'f', 'g'];
        expect(binarySearch(nums, 15)).toEqual(5);
        expect(binarySearch(strings, 'd')).toEqual(3);
        expect(binarySearch(strings, '23131')).toEqual(null);
    });
});
