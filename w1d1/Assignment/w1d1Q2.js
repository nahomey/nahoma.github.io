const prompt = require("prompt-sync")();

let age = prompt("please enter your age: ");


// while (age < 18) {
//     age = prompt("please enter you age: ");
// }
// =================

do {
    let age = prompt("please enter you age: ");
} while (age < 18);