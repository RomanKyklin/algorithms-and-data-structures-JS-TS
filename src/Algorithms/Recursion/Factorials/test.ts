import {factorialsIterative, factorialsRecursive} from "./index";

describe("factorials test functions", () => {
    it("should do iterative factorials", () => {
        expect(factorialsRecursive(-1)).toEqual(null);
        expect(factorialsRecursive(0)).toEqual(1);
        expect(factorialsIterative(1)).toEqual(1);
        expect(factorialsIterative(2)).toEqual(2);
        expect(factorialsIterative(3)).toEqual(6);
        expect(factorialsIterative(10)).toEqual(3628800);
    });
    it("should do recursive factorials", () => {
        expect(factorialsRecursive(-1)).toEqual(null);
        expect(factorialsRecursive(0)).toEqual(1);
        expect(factorialsRecursive(1)).toEqual(1);
        expect(factorialsRecursive(2)).toEqual(2);
        expect(factorialsRecursive(3)).toEqual(6);
        expect(factorialsRecursive(10)).toEqual(3628800);
    });
});
