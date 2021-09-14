"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { filterRange, filterRangeInPlace, groupById, unique, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {arr} arr to be filtred
 * @param {a} aAA the item to be checked
 * @param {b} bBB the item to be checked
 * @returns {array} array is returned
 */
function filterRange(arr, aAA, bBB) {
    return arr.filter(item =>
        (item >= aAA && item <= bBB));

}
/**
 * 
 * @param {arr} arr value to be checked
 * @param {aAA} aAA input to be checked
 * @param {bBB} bBB input to be checked 
 * @returns {arr} arr returned
 */
function filterRangeInPlace(arr, aAA, bBB) {
    for (let i = 0; i < arr.length; i++) {
        let range = arr[i];
        if (range < aAA || range > bBB) {
            arr.splice(i, 1);
            i--;
        }
    }

}
/**
 * 
 */
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

/**
 * 
 * @param {arr} arr input
 * @returns {array} array returned
 */
function unique(arr) {

    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

/**
 * 
 * @param {array} array input
 * @returns {object} object is returned
 */
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}