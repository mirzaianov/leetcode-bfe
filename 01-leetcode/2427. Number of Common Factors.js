// var commonFactors = function (a, b) {
//   let count = 1;
//   const n = a > b ? b : a;

//   for (let i = 2; i <= n; i++) {
//     if (a % i === 0 && b % i === 0) count++;
//   }

//   return count;
// };

// #2

var commonFactors = function (a, b) {
  let count = 1;

  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) count++;
  }

  return count;
};

console.log(commonFactors(12, 6)); // 4
console.log(commonFactors(25, 30)); // 2
