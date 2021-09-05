"use strict";
const assert = require("assert");
/**
 *  
 * @param {boolean} character the entered letter.
 * @returns {boolean} boolean returns true or false.
 */
function isVowel(character) {

    if (character == "a" || character == "e" || character == "i"|| character == "o" || character == "u") {
        return true;
    } else {
        return false;
    }
}

describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});