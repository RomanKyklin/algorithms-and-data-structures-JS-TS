import {quickSort} from "./index";

describe("quick sort", () => {
    // it('pivot helper should work correctly', () => {
    //     expect(pivot([4, 8, 2, 1, 5, 7, 6, 3])).toEqual(3);
    // });

    it("should sort correctly", () => {
        const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(quickSort(nums)).toEqual(expectedResult);
    });
});
