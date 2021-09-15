"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = { sumTo, factorial, fibonacci }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Number} num to be summed up 
 * @returns{Number} returns total number 
 */
function sumTo(num) {
    if (num <= 0) return 0;
    return num + sumTo(num - 1);
}
/**
 * 
 * @param {Number} numb is to be given for factorial proces
 * @returns {Number} returns the total number
 */
function factorial(numb) {
    if (numb === 0 || numb === 1) return 1;
    return numb * factorial(numb - 1);
}
/**
 * 
 * @param {Number} num to be imput
 * @returns {Number} returns total number
 */
function fibonacci(num) {

    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);

}