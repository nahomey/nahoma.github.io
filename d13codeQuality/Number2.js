"use strict";
const assert = require("assert");

/**
 * 
 * @param {Boolean} isSalaried if the person is salaried.
 * @param {Number} salesAmount amount of the sales.
 * @returns {Number} returns commission.
 */
function computeSalesCommission(isSalaried, salesAmount) {

    let commission = 0;

    if (isSalaried) {
        if (salesAmount < 300) {
            return commission;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = 1 / 100 * salesAmount;
        } else if (salesAmount > 500) {
            commission = 2 / 100 * (salesAmount - 500) + 5;
        }
    } else {
        if (salesAmount >= 300 && salesAmount <= 500) {
            commission = 2 / 100 * salesAmount;
        } else if (salesAmount > 500) {
            commission = 3 / 100 * (salesAmount - 500) + 10;
        }

    }
    return commission;
}

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });