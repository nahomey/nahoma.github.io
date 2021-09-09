//"use strict";  
/* eslint-disable */

/**
 * @returns {undefined}
 */
function setLatLong() {
    this.lat = 41.00;
    this.long = -92.96;
    console.log(this); // in strict mode we have a function that is 
    //referencing this it is going to log out undefined..we get an error

    // if we not in strict mode we dont get an error cuz we have a global object in node
}

const setLL = setLatLong(); // undefined  (it is undefoned because no return)
console.log("lat : ", lat);
console.log("setLL : ", setLL);