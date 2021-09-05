"use strict";
const assert = require("assert");
/**
 * 
 * sums the digits of a number.
 * @param {Number} number some number 
 * @returns {Number} returns sum of digits.
 */
function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = parseInt(number / 10);
    }
    return sum;
}

describe("Test sumDigit", function () {
    it("number 1234", function () {
        assert.strictEqual(sumDigits(1234), 10);
    });
    it("number 8", function () {
        assert.strictEqual(sumDigits(8), 8);
    });
});