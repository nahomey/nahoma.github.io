"use strict";

function calcDistance(x1, y1, x2, y2) {

    let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return d;
}
console.log("expect 5: ", calcDistance(0, 0, 5, 5));