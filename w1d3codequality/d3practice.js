// "use strict";

// function reverse(num) {
//     let reversed = "";

//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed += lastDigit;
//         num = Math.floor(num / 10);

//     }
//     return Number(reversed);
// }
// console.log(reverse(32));

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));

// function isReversedPrime(num) {
//     let reversedNum = reverse(num);
//     let result = isPrime(reversedNum);
//     return result;
// }
// console.log(isReversedPrime(32));

// =========

// for (let i = 1; i <= 10; i++) {
//     for (let j = i; j <= 10; j++) {
//         if (j <= 7) {
//             continue;
//         }
//         if (i * j >= 16) {
//             break;
//         }
//         console.log(j);
//     }
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// function foo(x) {
//     return console.log(x);

// }
// y = foo(10);

let x;