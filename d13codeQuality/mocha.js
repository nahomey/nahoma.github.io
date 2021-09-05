"use strict";
const assert = require("assert");
const functionsModule = require("./functions.js");
const isVowel = functionsModule.isVowel; 
const computeSalesCommission = functionsModule.computeSalesCommission;
const compoundInterest = functionsModule.compoundInterest;
const calcDownpayment = functionsModule.calcDownpayment;
const sumDigits = functionsModule.sumDigits;
const multiDigits = functionsModule.multiDigits;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;


describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

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

   describe("test of Compund Interest", function () {
    it("tests 100 initial amount , 10 percent interest and 1 year", function () {
        assert.strictEqual(compoundInterest(100, 10, 1), 110.47130674412968);
    }); it("tests 1000 initial amount , 5 percent interest and 10 year", function () {
        assert.strictEqual(compoundInterest(10000, 5, 10), 16470.0949769028);
    });
});

describe("test calculate down payment", function () {
    it("total cost 40000", function () {
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("total cost 50000", function () {
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it("total cost 100000", function () {
        assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it("total cost 200000", function () {
        assert.strictEqual(calcDownpayment(200000), 5000);
    });
});

describe("Test sumDigit", function () {
    it("number 1234", function () {
        assert.strictEqual(sumDigits(1234), 10);
    });
    it("number 8", function () {
        assert.strictEqual(sumDigits(8), 8);
    });
});

describe("Test multiDigits", function () {
    it("number 1234", function () {
        assert.strictEqual(multiDigits(1234), 24);
    });
    it("number 8", function () {
        assert.strictEqual(multiDigits(8), 8);
    });
});

describe("test convert Fahrenhiet to celsius", function(){
    it ("fahrenheit 32", function(){
        assert.strictEqual(convertFahrenheit(32), 0);
    });
    it ("fahrenheit 0", function(){
        assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
    });
    it ("fahrenheit 212", function(){
        assert.strictEqual(convertFahrenheit(212), 100);
    });
    it ("fahrenheit 32", function(){
        assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
    });
});

describe("test distance", function () {
    it("tests 0,0,5,5 coordinates ", function () {
        assert.strictEqual( calcDistance (0,0,5,5), 7.0710678118654755);
    });
});

