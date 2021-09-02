"use strict";



let score = [10, 20, 30, 40, 50];


function findAverage(arr) {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return average;
}

console.log(findAverage(score));


let scores2 = [];

for (let i = 0; i < 10; i++) {
    scores2[i] = Math.ceil(Math.random() * 10);
}

console.log(findAverage(scores2));

// ======l

let score = []