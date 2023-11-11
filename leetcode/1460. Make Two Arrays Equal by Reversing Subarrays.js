// const canBeEqual = function (target, arr) {
//     let targetCounter = {},
//         arrCounter = {};

//     for (let val of target) {
//         targetCounter[val] = (targetCounter[val] || 0) + 1;
//     }

//     for (let val of arr) {
//         arrCounter[val] = (arrCounter[val] || 0) + 1;
//     }

//     let targetCounterKeys = Object.keys(targetCounter);

//     for (let key of targetCounterKeys) {
//         if (targetCounter[key] !== arrCounter[key]) {
//             return false;
//         }
//     }

//     return true;
// };

const canBeEqual = function (target, arr) {
    // if (target.length === 1 && arr.length === 1) {
    //     return target[0] === arr[0];
    // }
    return target.sort().toString() === arr.sort().toString();
};

console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3])); // false
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // true
console.log(canBeEqual([7], [7])); // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // false

// how to compare 2 objects whether they are identical
