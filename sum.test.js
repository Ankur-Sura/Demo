import sum from "./sum.js";

describe("Test for Sum Function", () => {
    test("addition of   2+2 should be equal to 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("addition of -5+ -5 should be equal to -10", () => {
        expect(sum(-5, -5)).toBe(-10);
    });
})