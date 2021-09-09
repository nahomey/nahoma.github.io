"use strict ";

// // log even numbers to the console of arr


// arr = [1, 2, 3, 7, 6, 61]

// arr.forEach(function(item) { // (function(item,index,arr)) ??
//     if (item % 2 === 0) {
//         console.log(item);
//     }
// });

// //==========

// function sayHi() {
//     console.log("Hello");
// }

// let func = sayHi;

// func();
// sayHi();

// // =========

// let user = {
//     name: "john",
//     age: 30,


//     sayHi() {
//         console.log(user.name);
//     }
// }

// let admin = user;
// user = null;

// admin.sayHi();

function area() {
    console.log(this);
    return this.side * this.side;
}
const square1 = { side: 5, area: area };

console.log(area());