"use strict";

function sumDigits(input) {


    let sum = 0;
    while (input) {

        sum += input % 10;
        input = Math.floor(input / 10);
    }
    return sum;

}

console.log(sumDigits(1234));
console.log(102);
console.log(8);

// =======================

function multiDigits(input) {

    let product = 1;
    while (input) {

        product *= integer % 10;
        input = Math.floor(input / 10);
    }

    return product;

}
console.log(multiDigits(1234));
console.log(multiDigits(102));
console.log(multiDigits(8));