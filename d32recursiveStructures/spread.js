"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
 */
// module.exports = { copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {arr} arr to be copied
 * @returns {arr} returns copied array
 */
function copyArray(arr) {
    let copyarr = [...arr];
    return copyarr;

}
/**
 * 
 * @param {arr} arr1 to be concatinated
 * @param {arr} arr2 to be concatinated
 * @returns {arr} array is returned
 */
function concat(arr1, arr2) {

    let merge = arr1.concat(arr2);
    return merge;

}
/**
 * 
 * @param  {...any} numbers to be chaecked 
 * @returns {Number} minimum number returned
 */
function findMin(...numbers) {
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}
/**
 * 
 * @param {obj} obj1 to be combined
 * @param {obj} obj2 to be combined 
 * @returns {obj} returns object;
 */
function combineObjs(obj1, obj2) {
    let newObj = {...obj1, ...obj2 };
    return newObj;
}