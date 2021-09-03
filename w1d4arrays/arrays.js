"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} aA1 is a number
 * @param {number} bB1 is a number 
 * @param {number} cC1 is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(aA1, bB1, cC1) {
    if (aA1 >= bB1 && aA1 >= cC1) {
        return aA1;
    } else if (bB1 >= aA1 && bB1 >= cC1) {
        return bB1;
    } else
        return cC1;
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
 * @{arr} array will the the input 
 * @{str} longest word will be returned
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
console.log(findLongestWord(["abel", "nahom", " azamit"]));
/**
 * 
 * @param {arr} array to be reversed 
 * @returns (arr) reversed array
 */

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray(["A", "B", "C"]));

/**
 * 
 * @param {arr} array to be reversed in same array
 * @returns {arr} reversed array in same place
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
 * @param{number} students anwer
 * @param{number} answeres that are correct
 * @param{number} count of correct answers
 * 
 */
function scoreExams(studentAnswers, correctAnswers) {
    let correct = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        let count = 0;
        for (let j = 0; j < correctAnswers[i].length; j++) {
            if (studentAnswers[[i][j]] === correctAnswers[j]) {
                count++;
            }
        }
        correct[i] = count;
    }
    return correct;
}




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
}