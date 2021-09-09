"use strict";

// const numbers = [{
//     one: 1,
//     two: 22,
//     three: 333,
//     four: 444
// }]

// for (let i = 0; i < numbers.length; i++) {

// }
// console.log(numbers.one);
// console.log(numbers.two);
// console.log(numbers.three);
// console.log(numbers.four);

// const properties = ["one", "two", "three", "four"];

// for (const property of properties) {
//     console.log(numbers[property]); // bracket notation needed

// }

// // ========

// const student1 = {
//     studentId: "s101",
//     quizAnswers: [1, 1, 2, 4],

// };
// const student2 = {
//     studentId: "s102",
//     quizAnswers: [2, 1, 2, 2],

// };
// const student3 = {
//     studentId: "s103",
//     quizAnswers: [3, 1, 3, 4],

// };

// const quiz = [student1, student2, student3];
// const answers = [3, 1, 2, 4];


// function gradeQuiz(quizArray, answers) {
//     const grades = {} //need the obejct to return
//         //loop through the array of students and grade thier answrs
//     for (const student of quiz) {
//         const studentScore = scoreStudent(student, answers);
//         grades[student.studentid] = studentScore;
//     }
//     return grades;
// }

// function scoreStudent(student, answers) {
//     let score = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (student.quizAnswers[i] === answers[i]) {
//             score = score + 1;
//         }
//     }
//     return score;
// }


// quiz 5  true or false

// The following will log true to the console.
// const a = {};
// const b = {};
// console.log(a === b);

// const aaa = 5;
// const bbb = 5;
// console.log(aaa === bbb);

// const aaa = { name: "John", age: 10 };
// const bbb = { name: "John", age: 10 };
// console.log(aaa === bbb);

// const aaa = { name: "John", age: 10 };
// const bbb = aaa;
// console.log(aaa === bbb);

// const aaa = { name: "John", age: 10 };
// const bbb = aaa;
// bbb.name = "alex";
// bbb.age = 65;
// console.log(aaa === bbb);

// let baz = "" + 33 + 10;
// console.log(baz === 43);

// The following will give an error message:
// const aaa = 5;
// aaa = 6;

// The following will give an error message:
// const aaa = { xxx: 5 };
// aaa.xxx = 6;

// The following will give an error message.
// const a = { x: 5 };
// a = { x: 6 };

// const gradeReport = { s101: 3, s102: 2, s103: 3 };

// Write afunction, averageScore, that takes the grade report object
// and returns the average score of all the students.Your

// function should work
// for any number of students, but
// if you are not sure how to do that at least make it work
// for
// the given 3 students.Hint: to handle any number remember the
// for..in slide.