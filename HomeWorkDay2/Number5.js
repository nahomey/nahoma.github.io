"use strict";

function convertFahrenheit(fahrenheit){
    let celsius = (fahrenheit-32)/1.8;
    return celsius;
}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));