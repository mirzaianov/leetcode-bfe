// const fib = function (n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fib(n - 1) + fib(n - 2);
//     }
// };

// #2

const fib = function (n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
