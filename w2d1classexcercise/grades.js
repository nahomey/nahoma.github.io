"use strict";

const student1 = {
    studentId: "s101",
    quizAnswers: [1, 1, 2, 4],

};
const student2 = {
    studentId: "s102",
    quizAnswers: [2, 1, 2, 2],

};
const student3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3, 4],

};

const quiz = [student1, student2, student3];

function collectAnswers(quizArray, questionNumber) {
    const answers = [];
    const index = questionNumber - 1;
    for (const student of quizArray) {
        answers.push(student.quizAnswers[index]);
    }
    return answers;
}