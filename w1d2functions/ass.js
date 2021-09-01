"use strict";

function computeSalesCommision(salaried, salesAmount) {

    let commission = 0;
    if (salaried === true) {
        if (salesAmount < 300) {
            commission = 0;
        } else if (salesAmount > 300 && salesAmount < 500) {
            commission = (1 / 100) * salesAmount;
        } else if (salesAmount > 500) {
            commission = (2 / 100) * salesAmount;
        }
    } else {
        if (salesAmount > 300 && salesAmount < 500) {
            commission = (2 / 100) * salesAmount;
        } else if (salesAmount > 500) {
            commission = (3 / 100) * salesAmount;
        }
    }