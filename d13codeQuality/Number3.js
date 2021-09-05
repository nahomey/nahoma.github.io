"use strict";
const assert = require("assert");

/**
 * 
 *  calculates compound interest
 * @param {Number} initialAmount total initial amount.
 * @param {Number} interestRate intereset percentage.
 * @param {Number} years number of years. 
 * @returns{Number} total amount
 */
function compoundInterest(initialAmount, interestRate, years) {
    const MONTHS = 12;
    let totalAmount = initialAmount * (1 + (Math.pow((interestRate / 100) / MONTHS)) , (years * MONTHS));
    return totalAmount;
}


describe("test of Compund Interest", function () {
    it("tests 100 initial amount , 10 percent interest and 1 year", function () {
        assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
    }); it("tests 1000 initial amount , 5 percent interest and 10 year", function () {
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
});