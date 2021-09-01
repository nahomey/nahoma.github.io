const prompt = require("prompt-sync")();

let cost1 = prompt("enter the cost of the house: ");

let cost = Number(cost1);

if (cost > 0 && cost < 50000) {
    console.log((5 / 100) * cost)
} else if (cost > 0 && cost < 100000) {
    console.log(1000 + (10 / 100) * (cost - 50000))
} else if (cost > 100000 && cost < 200000) {
    console.log(2000 + (15 / 100) * (cost - 100000))
} else if (cost >= 200000) {
    console.log(5000 + (10 / 100) * (cost - 200000))
}