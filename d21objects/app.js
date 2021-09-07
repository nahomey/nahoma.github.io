"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, addBook, findAuthors, findIDs, scramble }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {

    let newBook = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("id").value
    };

    console.log(newBook);
    library.push(newBook);

    return newBook;
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
// function showTitles() {

//     /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

//     const titles = findTitles();

//     /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
//     titles.sort();
//     const titleString = titles.join("\n");

//     let textArea = document.getElementById("displayArea");
//     textArea.innerHTML = titleString;
// }

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"]; //FIX THIS!!
    // implement this and other functions

    for (const book of library) {
        titles.push(book.title);
    }
    titles.sort();
    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
    return titles;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findAuthors() {
    let authors = [];
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"]; //FIX THIS!!
    // implement this and other functions

    for (const book of library) {
        authors.push(book.author);
    }
    authors.sort();
    const titleString = authors.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
    return authors;
}
/**
 * 
 * @return {object} array holding all titles as elements
 */
// function showAuthors() {

//     const authors = findAuthors();

//     /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
//     authors.sort();
//     const titleString = authors.join("\n");

//     let textArea = document.getElementById("displayArea");
//     textArea.innerHTML = titleString;
// }

/**
 * 
 * @returns {string} returns string
 */
function findIDs() {
    let idNumber = [];
    for (const book of library) {
        idNumber.push(book.libraryID);
    }
    idNumber.sort();
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idNumber;
    return idNumber;
}


/**
 * 
 * @return {object} array holding all titles as elements
 */
function scramble() {
    const titles = findTitles();
    const titleWord = titles.toString().split(" ");
    console.log(titleWord);
    const sortedTitle = titleWord.sort((aaa, bbb) => aaa.length - bbb.length);
    console.log(sortedTitle);
    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}