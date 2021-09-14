"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
//module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray };
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if ((b > a && b > c) || b === a || b === c) {
        return b;
    } else if ((c > a && c > b) || c === a || c === b) {
        return c;
    } else {
        return "not valid";
    }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for (let i = 0; i < arr.length; i++) {
        tot *= arr[i];
    }

    return tot;

}
/**
 * 
 * @param {Array} arr words
 * @return{string} maximum length word.
 */
function findLongestWord(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
}
/**
 * 
 * @param {Array} arr of any.
 * @returns{Array} reversed array.
 */
function reverseArray(arr) {
    let j = 0;
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray[j] = arr[i];
        j++;
    }
    return reversedArray;
}

/**
 * 
 * @param {Array} arr of any data type
 * @retuns {Array} reversed.
 */
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor((arr.length) / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
/**
 * 
 * @param {Array} studentAnswers student scores
 * @param {Array} correctAnswers correct answers
 * @returns {Array} array of result 
 */
function scoreExams(studentAnswers, correctAnswers) {
    const result = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        let counter = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (correctAnswers[j] === studentAnswers[i][j]) {
                counter++;
            }
        }
        result[i] = counter;
    }

    return result;
}
/**
 * 
 * @param {Number} num1 number of row
 * @param {Number} num2 number of colomn
 * @returns{Array} multidimeonsinal array.
 */
function generateArray(num1, num2) {
    const arr = [];
    let counter = 1;

    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            arr[i] = [];
        }
    }
    for (let i = 0; i < num1; i++) {
        for (let j = 0; j < num2; j++) {
            arr[i][j] = counter;
            counter++;
        }
    }
    return arr;
}