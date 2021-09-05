"use strict";

/*

*/        
function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = parseInt(number / 10);
    }
    return sum;
}

function multDigits(number) {
    let product = 1;
    while (number > 0) {
        product *= number % 10;

        number = parseInt(number / 10);
    }
    return product;
}
console.log(sumDigits(8));
console.log(multDigits(8));
