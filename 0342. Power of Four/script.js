// const isPowerOfFour = function (n) {
//     const myLog = Math.log(n) / Math.log(4);

//     console.log(myLog);

//     if (myLog % 1 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

const isPowerOfFour = (n) => {
  const base = 4;

  if (n < 1) return false;
  if (n === 1) return true;

  return isPowerOfFour(n / base);
};

console.log(isPowerOfFour(0)); // false
console.log(isPowerOfFour(1)); // true
console.log(isPowerOfFour(4)); // true
console.log(isPowerOfFour(5)); // false
console.log(isPowerOfFour(16)); // true
console.log(isPowerOfFour(256)); // true
