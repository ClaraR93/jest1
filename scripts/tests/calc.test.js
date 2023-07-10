const addition = require("..//calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () =>{
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 81 for 40 + 41", () => {
            expect(addition(40, 41)).toBe(81);
        });
         
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})