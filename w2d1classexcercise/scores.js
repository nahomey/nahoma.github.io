"use strict";


//  1) write a function to find the average score

let scores = [{ id: 1, score: 10 }, { id: 2, score: 5 }, { id: 3, score: 8 }, { id: 4, score: 12 }, ];




// 2) write a function to find highest score
// -return the object with id and score



function highestScore(scoreArr) {
    let highest = 0;
    let higheststu = null;
    for (const stu of scoreArr) {
        if (stu.score > highest) {
            highest = stu.score;
            higheststu = stu;
        }
    }
    return higheststu;
}



// write a function to find averagepoints across all students
// eg.average=10+8+6+2+2+0+4+2=32/10 =3.2
// tot +=getpoints(stupoints)

pointsArr = [{ id: 1, points: [10, 8, 6, 2, 2] }, { id: 2, points: [0, 4, 2, 0, 0] }];