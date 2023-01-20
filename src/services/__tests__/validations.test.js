const { isEmpty,is8CharMin } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });

    
});

// TODO: Create tests suite for validation function

describe("validations tests suites - is8CharMin", () => {
    
    test("should return false as the gamertag length is < 8", () => {
        const result = is8CharMin("Label");
        expect(result).toBe(false);
    });

    test("should return true as the gamertag length is === 8", () => {
        const result = is8CharMin("gamertag");
        expect(result).toBe(true);
    });

    test("should return true as the gamertag length is > 8", () => {
        const result = is8CharMin("dlstechteaching");
        expect(result).toBe(true);
    });

    
});