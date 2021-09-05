"use strict";
/*
    Input- initial amount, annual interest rate, nuber of years
    Output- the final balance
    process:
            - Using the compund formula, evaluate all the given inputs 
            - return the final balance 
 */


function compoundInterest(initialAmount, interestRate, years) {
    const MONTHS = 12;
    let totalAmount = initialAmount * (1 + ((interestRate / 100) / MONTHS)) ** (years * MONTHS);
    return totalAmount;
}

console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));