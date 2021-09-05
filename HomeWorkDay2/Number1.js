"use strict";
/*
    Input   - sales amount
            - true or false(if he is salaried or no)
    Output  - Computed sales commission
    Process - if the person is salaried:- if his sales is less than
              300 no commssion, and if the sales is between 300 and 
              500 inclusive the commission is 2% of the sales, else if 
              it is above 500, we calculate the five hundred eith 1% and 
              rest depending on the left sales.
              - if the person is not salaried, if sales is between 300 and
              500 inclusive, commission is 2% of the sales amount, if its is 
              above 500,we calculate the five hundred eith 2% and 
              rest depending on the left sales.
              - then return commission
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
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));