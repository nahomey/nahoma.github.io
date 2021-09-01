"use strict";

// inpu: get the cost
// output: get the downPayment
// process: i will check the cost,and multiply the percentage 
//         with cost and add the flat downpayment

function calcDownpayment(cost) {

    let downPayment = 0;


    if (cost > 0 && cost < 50000) {
        downPayment = (5 / 100) * cost;
    } else if (cost >= 50000 && cost < 100000) {
        downPayment = (2500 + (10 / 100) * (cost - 50000));
    } else if (cost >= 100000 && cost < 200000) {
        downPayment = (7500 + (15 / 100) * (cost - 100000));
    } else if (cost >= 200000) {
        downPayment = (5000 + (10 / 100) * (cost - 200000));
    }
    return downPayment;
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 225000: ", calcDownpayment(200000));