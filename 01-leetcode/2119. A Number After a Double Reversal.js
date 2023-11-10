// var isSameAfterReversals = function (num) {
//   if (num === 0) return true;

//   return num.toString().at(-1) != 0;
// };

var isSameAfterReversals = function (num) {
  return num === 0 || num % 10 !== 0;
};

console.log(isSameAfterReversals(526)); // true
console.log(isSameAfterReversals(1800)); // false
console.log(isSameAfterReversals(0)); // true
