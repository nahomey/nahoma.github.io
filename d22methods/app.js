"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} initialValue of input
 * @param {NUmber} increment the input
 * @returns {undefined}
 */
function Accumulator(initialValue, increment) {
    this.currentValue = initialValue;
    this.increment = increment;

    this.accumulate = function() {
        this.currentValue += this.increment;
        return this.currentValue;

    };
    this.report = function() {
        return this.currentValue;
    };

}

// let accumulator = new Accumulator(5, 10);
// accumulator.report();
// accumulator.report();


// console.log(accumulator.initialValue);
//implement this



/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
    //implement this
    this.setValues = function(aAA, bBB) {
        this.aAA = aAA;
        this.bBB = bBB;
    };

    this.sum = function() {
        return this.aAA + this.bBB;
    };

    this.mul = function() {
        return this.aAA * this.bBB;
    };
}

// let calculator = new Calculator();
// calculator.setValues(20, 30);

// console.log("Sum: " + calculator.sum());
// console.log("Mul: " + calculator.mul());