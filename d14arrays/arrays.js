"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
// module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray };
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num1 is a number
 * @param {number} num2 is a number 
 * @param {number} num3 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if ((num2 > num1 && num2 > num3) || num2 === num1 || num2 === num3) {
        return num2;
    } else if ((num3 > num1 && num3 > num2) || num3 === num1 || num3 === num2) {
        return num3;
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
    for (const number of arr) {
        tot *= number;
    }

    return tot;

}

/**
 * 
 * @param {array} arr will the the input 
 * @returns {string} longest word 
 */
function findLongestWord(arr) {
    let longest = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

/**
 * 
 * @param {array} arr to be reversed 
 * @returns {arr} reversed array
 */
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

/**
 * 
 * @param {arr}  arr input
 * @returns {arr} returns reversed array in same place
 */
function reverseArrayInPlace(arr) {
    let temp = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {

        temp.push(arr.pop());
    }
    for (let i = 0; i < len; i++) {
        arr.unshift(temp.pop());
    }
    return arr;
}
/**
 * 
 * @param {number} studentAnswers input 
 * @param {number} correctAnswers that are correct
 * @returns {number} count of correct answers
 * 
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
 * @param {number} num1 input1
 * @param {number} num2 input2
 * @returns {array} array is returned 
 */
function generateArray(num1, num2) {
    let multiArray = [];
    let index = 1;
    for (let i = 0; i < num1; i++) {
        let array = [];
        for (let j = 0; j < num2; j++) {
            array.push(index);
            index++;
        }
        multiArray.push(array);
    }
    return multiArray;
}