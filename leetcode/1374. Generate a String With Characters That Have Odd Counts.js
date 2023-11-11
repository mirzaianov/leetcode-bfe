// var generateTheString = function (n) {
//   if (n === 1) return 'a';

//   let string = [];

//   if (n % 2 === 0) {
//     string[0] = 'a';
//     for (let i = 1; i < n; i++) {
//       string[i] = 'b';
//     }
//   } else {
//     string[0] = 'a';
//     string[1] = 'b';
//     for (let i = 2; i < n; i++) {
//       string[i] = 'c';
//     }
//   }

//   return string.join('');
// };

var generateTheString = function (n) {
  return n % 2 ? new Array(n).fill('a').join('') : new Array(n - 1).fill('a').join('') + 'b';
};

console.log(generateTheString(4)); //
console.log(generateTheString(1)); //
console.log(generateTheString(7)); //
