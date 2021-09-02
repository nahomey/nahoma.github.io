"use strict";
const assert = require("assert");
const functionsModule = require("./d13codeQuality.js");
const isVowel = functionsModule.isVowel;
const computeSalesCommision = functionsModule.computeSalesCommision;
const compoundInterest = functionsModule.compoundInterest;
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigits = functionsModule.sumDigits;
const multiDigits = functionsModule.multiDigits;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;

describe("isVowel", function() {
    it("a is vowel", function() {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function() {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function() {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function() {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function() {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function() {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function() {
        assert.equal(isVowel("5"), false);
    });
});
describe("test of ComputSalesCommission", function() {
    it("tests salaried and 200 sales", function() {
        assert.strictEqual(computeSalesCommision(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function() {
        assert.strictEqual(computeSalesCommision(false, 200), 0);
    });
    it("tests salaried and 300 sales", function() {
        assert.strictEqual(computeSalesCommision(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function() {
        assert.strictEqual(computeSalesCommision(false, 300), 0);
    });
    it("tests salaried and 3500 sales", function() {
        assert.strictEqual(computeSalesCommision(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function() {
        assert.strictEqual(computeSalesCommision(false, 3500), 105);
    });
});
describe("test of compoundInterest", function() {
    it("tests the compoundInterest expected", function() {
        assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
    });
    it("tests the compoundInterest expected", function() {
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
});
describe("test of calcDownpayment", function() {
    it("calculates the calcDownpayment", function() {
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("calculates the calcDownpayment", function() {
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it("calculates the calcDownpayment", function() {
        assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it("calculates the calcDownpayment", function() {
        assert.strictEqual(calcDownpayment(200000), 5000);
    });
});
describe("sumDigits", function() {
    it("sumDigits", function() {
        assert.strictEqual(sumDigits(1234), 10);
    });
    it("sumDigits", function() {
        assert.strictEqual(sumDigits(102), 3);
    });
    it("sumDigits", function() {
        assert.strictEqual(sumDigits(8), 8);
    });
});
describe("multiDigits", function() {
    it("multiDigits", function() {
        assert.strictEqual(multiDigits(1234), 24);
    });
    it("multiDigits", function() {
        assert.strictEqual(multiDigits(102), 0);
    });
    it("multiDigits", function() {
        assert.strictEqual(multiDigits(8), 8);
    });
});
describe("convertFahrenheit", function() {
    it("convertFahrenheit", function() {
        assert.strictEqual(convertFahrenheit(32), 0);
    });
    it("convertFahrenheit", function() {
        assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
    });
    it("converFahrenheit", function() {
        assert.strictEqual(convertFahrenheit(212), +100);
    });
    it("converFahrenheit", function() {
        assert.strictEqual(convertFahrenheit(100), +37.77777777777778);
    });
});
describe("calcDistance", function() {
    it("calcDistance", function() {
        assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
    });
});