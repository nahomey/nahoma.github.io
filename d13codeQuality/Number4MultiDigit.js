"use strict";
const assert = require("assert");

/**
 * multiplies digits of a number
 * @param {Number} number some number.
 * @returns{Number} returns product of digits.
 */
function multiDigits(number) {
    let product = 1;
    while (number > 0) {
        product *= number % 10;
        number = parseInt(number / 10);
    }
    return product;
}

describe("Test multiDigits", function () {
    it("number 1234", function () {
        assert.strictEqual(multiDigits(1234), 24);
    });
    it("number 8", function () {
        assert.strictEqual(multiDigits(8), 8);
    });
});
