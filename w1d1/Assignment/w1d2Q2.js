"user stric";

function compoundInterest(amount, rate, year) {

    const MONTHS = 12;
    let balance = 0;

    balance = amount * Math.pow((1 + (rate / 100) / (MONTHS)), year * MONTHS);

    return balance;

}
console.log("expect 110.47", compoundInterest(100, 10, 1));