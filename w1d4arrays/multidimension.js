"use strict ";

// let matrix = [
//     [1, 2],
//     [4, 5]
// ];

// function sumMatrix(matrix) {

//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix.length; j++) {
//             console.log(sumMatrix[i][j]);
//             sum += arr[i][j];
//         }
//     }
//     return sum;
// }



function findLongestWord(arr) {
    let words = "";
    let longest = arr[i].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            arr[i] = longest;
        }
    }
    return longest;
}
console.log(findLongestWord(["abel", "nahom", "azamit"]));