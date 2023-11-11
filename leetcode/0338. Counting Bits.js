// const countBits = function (n) {
//     const storage = [];

//     for (let i = 0; i <= n; i++) {
//         storage.push(
//             i
//                 .toString(2)
//                 .split('')
//                 .reduce((acc, item) => acc + +item, 0)
//         );
//     }

//     return storage;
// };

// #2

// const countBits = function (n) {
//   const ans = [];

//   for (let i = 0; i <= n; i++) {
//     const bin = i
//       .toString(2)
//       .split('')
//       .reduce((acc, item) => acc + +item, 0);

//     ans.push(bin);
//   }

//   return ans;
// };

const countBits = function (n) {
  let result = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    result[i] = result[i & (i - 1)] + 1;
  }

  return result;
};

console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
