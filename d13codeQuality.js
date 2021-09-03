"use strict";

module.exports = { isVowel, computeSalesCommision, compoundInterest, calcDownpayment, sumDigits, multiDigits, convertFahrenheit, calcDistance };
/**
 * 
 * @param {String} char is to be checked
 * @returns {Boolean} true or false
 */
function isVowel(char) {

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
}
//here is a change in code quality ...
/**
 * 
 * @param{String} salaried to be checked 
 * @param{number} salesAmount to be checked
 * @returns {number} it returns commission
 */
function computeSalesCommision(salaried, salesAmount) {
    let commission = 0;
    if (salaried === true) {
        if (salesAmount < 300) {
            commission = 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = (1 / 100) * salesAmount;
        } else if (salesAmount > 500) {
            commission = (2 / 100) * salesAmount;
        }
    } else {

        if (salesAmount > 300 && salesAmount < 500) {
            commission = (2 / 100) * salesAmount;
        } else if (salesAmount > 500) {
            commission = (3 / 100) * salesAmount;
        } else if (salesAmount < 300) {
            commission = 0;
        }
    }

    return commission;
}

/**
 * 
 * @param {number} amount to be entered
 * @param {number} rate to be taken
 * @param {number} year took
 * @returns {number} returns balance
 */
function compoundInterest(amount, rate, year) {

    const MONTHS = 12;
    let balance = 0;

    balance = amount * Math.pow((1 + (rate / 100) / (MONTHS)), year * MONTHS);

    return balance;

}

/**
 * 
 * @param {number} cost of the house
 * @returns {number} retuns the downpayment
 */
function calcDownpayment(cost) {

    let downPayment = 0;


    if (cost > 0 && cost < 50000) {
        return (5 / 100) * cost;
    } else if (cost >= 50000 && cost < 100000) {
        return (2500 + (10 / 100) * (cost - 50000));
    } else if (cost >= 100000 && cost < 200000) {
        return (7500 + (15 / 100) * (cost - 100000));
    } else if (cost >= 200000) {
        return (5000 + (10 / 100) * (cost - 200000));
    }
    return downPayment;
}
/**
 * 
 * @param {number} input digits will be added
 * @returns {number} returns sum of the digits
 */
function sumDigits(input) {


    let sum = 0;
    while (input) {

        sum += input % 10;
        input = Math.floor(input / 10);
    }
    return sum;

}

/**
 * 
 * @param {number} input igits to be multiplied
 * @returns {number} returns the product of digits
 */
function multiDigits(input) {

    let product = 1;
    while (input) {

        product *= input % 10;
        input = Math.floor(input / 10);
    }

    return product;

}
/**
 * 
 * @param {number} temp is to be converted
 * @returns {number} temperature converted in celcius
 */
function convertFahrenheit(temp) {

    let celcius = (5 / 9) * (temp - 32);

    return celcius;

}

/**
 * 
 * @param {number} xx1 is coordinate number
 * @param {number} yy1 is coordinate number
 * @param {number} xx2 is coordinate number
 * @param {number} yy2 is coordinate number
 * @returns {number} returns the distance between coordinates
 */
function calcDistance(xx1, yy1, xx2, yy2) {

    let distance = Math.sqrt(Math.pow((xx2 - xx1), 2) + Math.pow((yy2 - yy1), 2));
    return distance;
}
