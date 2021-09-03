"use strict";

// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }


// ======

// function summOddIndicesValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }


// // ===========
// function sumArrays(arr1, arr2) {
//     let resultArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         resultArray[i] = arr1[i] + arr2[i];
//     }
//     return resultArray;
// }

// ====


function findLongestWord(str) {
    let words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = Word;
        }
    }
    return longest;
}
console.log(findLongestWord(["abel", "nahom", " azamit"]));


// =========


// function reverArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// console.log(reverArray(["A", "B", "C"]));



// ======

// function reverseArrayInPlace(arr) {
//     let temp = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         temp.push(arr[i]);
//     }
//     return arr;
// }

// console.log(reverseArrayInPlace(["A", "B", "C"]));

// function reverseArrayInSamePlace(arr) {
//     let temp = [];
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {

//         temp.push(arr.pop());
//     }
//     for (let i = 0; i < len; i++) {
//         arr.unshift(temp.pop());
//     }
//     return arr;
// }
// console.log(reverseArrayInSamePlace(["A", "B", "C"]));