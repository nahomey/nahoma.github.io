"use strict";

//  setTime out function ...outputs every second
/**
 * 
 */
function printNumber() {
    console.log("number");
}
setTimeout(printNumber, 1000);


//setInterval
/**
 * 
 */
function printNumber1() {
    console.log("number");
}
setInterval(printNumber1, 1000);

//printing out numbers upto 6 times
/**
 * 
 */
function printNumber2() {
    runCount++;
    if (runcount > 5) {
        clearInterval(interval)
    }
    console.log("number");
}
let interval;
let runcount = 0;
console.log("number");
interval = setInterval(printNumber2, 1000);