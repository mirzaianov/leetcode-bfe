'use strict';

/*

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

*/

const numberOfSteps = function (num) {
    let steps = 0;

    for (let i = 0; num > 0; steps++) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
    }

    return steps;
};

// const numberOfSteps = function (num) {
//     for (var res = 0; num > 0; res++) num % 2 ? (num -= 1) : (num /= 2);
//     return res;
// };

// let numberOfSteps = function (num) {
//     let step = 0;

//     while (num !== 0) {
//         num % 2 === 0 ? num /= 2 : num--;
//         step++;
//     }
//     return step;
// };

// let numberOfSteps = function (num) {
//     let step = 0;

//     while (num !== 0) {
//         if (num % 2 === 0) {
//             num /= 2;
//         } else {
//             num--;
//         }
//         step++;
//     }
//     return step;
// };

console.log(numberOfSteps(10598));
