"use strict";
module.exports= {isVowel, computeSalesCommission, compoundInterest,calcDownpayment,
    sumDigits, multiDigits, convertFahrenheit,calcDistance } ;
/**
 *  
 * @param {boolean} character the entered letter.
 * @returns {boolean} boolean returns true or false.
 */
function isVowel(character) {

    if (character === "a" || character === "e" || character === "i"|| character === "o" || character ==="u") {
        return true;
    } else {
        return false;
    }
}

// Number 2

/**
 * 
 * @param {Boolean} isSalaried if the person is salaried.
 * @param {Number} salesAmount amount of the sales.
 * @returns {Number} returns commission.
 */
function computeSalesCommission(isSalaried, salesAmount) {

    let commission = 0;

    if (isSalaried) {
        if (salesAmount < 300) {
            return commission;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = 1 / 100 * salesAmount;
        } else if (salesAmount > 500) {
            commission = 2 / 100 * (salesAmount - 500) + 5;
        }
    } else {
        if (salesAmount >= 300 && salesAmount <= 500) {
            commission = 2 / 100 * salesAmount;
        } else if (salesAmount > 500) {
            commission = 3 / 100 * (salesAmount - 500) + 10;
        }

    }
    return commission;
}

//Number 3

/**
 * 
 *  calculates compound interest
 * @param {Number} initialAmount total initial amount.
 * @param {Number} interestRate intereset percentage.
 * @param {Number} years number of years. 
 * @returns{Number} total amount
 */
function compoundInterest(initialAmount, interestRate, years) {
    const MONTHS = 12;
    let comInterest = initialAmount * Math.pow(((1 +(interestRate / 100)/MONTHS)) , (MONTHS * years));
    return comInterest;
}

// console.log(compoundInterest(10000,5,10));

//Number 4 A

/**
 * calculates downpayment.
 * @param {Number} totalCost - total cost of house.
 * @returns{Number} total downpayment
 */
function calcDownpayment(totalCost) {
    let downPayment = 0;
    if (totalCost > 0 && totalCost < 50000) {
        downPayment = 5 / 100 * totalCost;
    } else if (totalCost >= 50000 && totalCost < 100000) {
        downPayment = 10 / 100 * (totalCost - 50000) + 2500;
    } else if (totalCost >= 100000 && totalCost < 200000) {
        downPayment = 15 / 100 * (totalCost - 100000) + 7500;
    } else if (totalCost >= 200000) {
        downPayment = 10 / 100 * (totalCost - 200000) + 5000;
    }
    return downPayment;
}

// Number 4 B

/**
 * 
 * sums the digits of a number.
 * @param {Number} number some number 
 * @returns {Number} returns sum of digits.
 */
function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = parseInt(number / 10);
    }
    return sum;
}

//Number 4 C

/**
 * multiplies digits of a number
 * @param {Number} number some number.
 * @returns{Number} returns product of digits.
 */
function multiDigits(number) {
    let product = 1;
    while (number > 0) {
        product *= number % 10;
        number = parseInt(number / 10);
    }
    return product;
}

// Number 4 D

/**
 * 
 * @param {Number} fahrenheit degree in fahrenheit.
 * @returns{Number} returns degree in celsius.
 */
function convertFahrenheit(fahrenheit){
    let celsius = (fahrenheit-32)/1.8;
    return celsius;
}

//Number 4 E

/**
 * calculates distance b/n coordinates.
 * @param {Number} xcoordinate1 first x coordinate.
 * @param {Number} ycoordinate1 first y coordinate.
 * @param {Number} xcoordinate2 second x coordinate.
 * @param {Number} ycoordinate2 second y coordinate.
 * @returns {Number} distance.
 */
function calcDistance(xcoordinate1, ycoordinate1, xcoordinate2, ycoordinate2) {
    let distance = Math.sqrt(Math.pow((xcoordinate2 - xcoordinate1), 2) + Math.pow((ycoordinate2 - ycoordinate1), 2));
    return distance;
}