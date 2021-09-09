"use stric";


// product of the numbers

let arr = [1, 2, 3, 4, 5];
let result = arr.reduce(function(product, current) { return product * current; }, 1);

console.log(result);

// max of the numbers
let arr1 = [1, 2, 3, 4, 5];
let resultMax = arr1.reduce(function(max, current) {
        if (current > max) {
            return current;
        } else return max;
    },
    arr1[0]);
console.log(resultMax);







// let result2 = arr.reduce((sum, current) => sum + current, 0);