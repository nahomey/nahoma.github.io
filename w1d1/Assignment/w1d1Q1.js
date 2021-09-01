const prompt = require("prompt-sync")();

let salesAmount = prompt("enter the amount of sales: ");
let salary = prompt("say true or false ");

let sales = Number(salesAmount);

let commission = 0;

if (salary == "true") {
    if (sales < 300) {

    } else if (sales > 300 && sales < 500) {
        commission = ((1 / 100) * sales);
    } else if (sales > 500) {
        commission = (2 / 100) * sales;
    }
} else {
    if (sales > 300 && sales < 500) {
        commission = (2 / 100) * sales;
    } else if (sales > 500) {
        commission = (3 / 100) * sales;
    }
}

console.log(commission);