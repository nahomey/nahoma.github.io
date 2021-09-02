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
    return commission;
}
console.log("expected 0: ", computeSalesCommision(true, 200));
console.log("expect 0: ", computeSalesCommision(false, 200));
console.log("expect 0: ", computeSalesCommision(true, 300));
console.log("expect 0: ", computeSalesCommision(false, 300));
console.log("expect 0: ", computeSalesCommision(true, 3500));
console.log("expect 0: ", computeSalesCommision(false, 3500));