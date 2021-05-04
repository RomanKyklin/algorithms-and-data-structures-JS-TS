import {naiveStringSearch} from "./index";

describe("naive string search", () => {
    it("should search correctly", () => {
        expect(naiveStringSearch('dasdaadadsadgaz24432', 'sadaa')).toEqual(0);
        expect(naiveStringSearch('dasdaadadsadgaz24432', 'gaz')).toEqual(1);
        expect(naiveStringSearch('dagazadadsadgaz24432', 'gaz')).toEqual(2);
    });
});
