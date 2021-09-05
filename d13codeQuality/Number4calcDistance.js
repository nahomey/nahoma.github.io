"use strict";
const assert = require("assert");

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
console.log("expect 5 : " + calcDistance(0, 0, 5, 5));

describe("test distance", function () {
    it("tests 0,0,5,5 coordinates ", function () {
        assert.strictEqual( calcDistance (0,0,5,5), 7.0710678118654755);
    });
});