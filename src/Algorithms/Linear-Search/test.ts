import {linearSearch} from "./index";

describe("linear search", () => {
    it("should search correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const strings = ['a', 'b', 'c', 'd', 'f', 'g'];
        expect(linearSearch(nums, 1)).toEqual(9);
        expect(linearSearch(strings, 'd')).toEqual(3);
        expect(linearSearch(strings, '23131')).toEqual(null);
    });
});
