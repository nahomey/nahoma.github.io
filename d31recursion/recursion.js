"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop }; //add all of your function names here that you need for the node mocha tests

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

/**
 * 
 * @param {object} input is array of objects
 * @returns {string} returns string;
 */
function outputList(input) {
    if (input.next === null) {
        return input.value + " printed to console";
    } else {
        return input.value + " " + outputList(input.next);
    }
}
/**
 * 
 * @param {object} input to printed out
 * @returns {string} returns string
 */
function outputListLoop(input) {
    let str = "";
    while (input.next !== null) {

        str += input.value + " ";
        input = input.next;
    }

    return str + input.value + " printed to console";
}

/**
 * 
 * @param {object} list  to printed out reversedly
 * @returns {string} returns string
 */
function reverseList(list) {
    if (list.next == null)
        return list.value;
    else {
        return reverseList(list.next.value);

    }
}
/**
 * 
 * @param {object} list to be reversed
 * @returns{string} returns string
 */
function reverseListLoop(list) {
    let arr = []
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    for (let value of arr.reverse()) {
        console.log(value);
    }
}