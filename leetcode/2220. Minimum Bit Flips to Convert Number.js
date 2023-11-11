// const minBitFlips = function (start, goal) {
//     let startBinary = start.toString(2),
//         goalBinary = goal.toString(2),
//         count = 0;

//     const letter = '0';

//     equilizeSize();

//     for (let i = goalBinary.length - 1; i >= 0; i--) {
//         if (goalBinary[i] !== startBinary[i]) {
//             count++;
//         }
//     }

//     return count;

//     function equilizeSize() {
//         if (startBinary.length === goalBinary.length) {
//             return;
//         }

//         if (startBinary.length < goalBinary.length) {
//             startBinary = letter.concat(startBinary);
//             return equilizeSize();
//         } else {
//             goalBinary = letter.concat(goalBinary);
//             return equilizeSize();
//         }
//     }
// };

// const minBitFlips = function (start, goal) {
//     return (start ^ goal)
//         .toString(2)
//         .split('')
//         .reduce((a, b) => a + +b, 0);
// };

// #2

var minBitFlips = function (start, goal) {
  let xor = start ^ goal;
  let count = 0;

  while (xor > 0) {
    count += xor & 1;
    xor = xor >> 1;
  }

  return count;
};

console.log(minBitFlips(10, 7)); // 3
console.log(minBitFlips(3, 4)); // 3
