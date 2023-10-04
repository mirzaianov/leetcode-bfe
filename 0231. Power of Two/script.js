const isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
};

// var isPowerOfTwo = function (n) {
//     return Number.isInteger(Math.log2(n));
// };

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
