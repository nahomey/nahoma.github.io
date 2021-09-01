"use strict";

function calcDistance(x1, y1, x2, y2) {

    let d = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return d;
}
console.log("expect 5: ", calcDistance(0, 0, 5, 5));