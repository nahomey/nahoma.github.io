"use strict";
const assert  = require("assert");
/**
 * 
 * @param {Number} fahrenheit degree in fahrenheit.
 * @returns{Number} returns degree in celsius.
 */
function convertFahrenheit(fahrenheit){
    let celsius = (fahrenheit-32)/1.8;
    return celsius;
}


describe("test convert Fahrenhiet to celsius", function(){
    it ("fahrenheit 32", function(){
        assert.strictEqual(convertFahrenheit(32), 0);
    });
    it ("fahrenheit 0", function(){
        assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
    });
    it ("fahrenheit 212", function(){
        assert.strictEqual(convertFahrenheit(212), 100);
    });
    it ("fahrenheit 32", function(){
        assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
    });
});