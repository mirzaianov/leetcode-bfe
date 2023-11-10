// function fibonacci(n) {
//   if (n === 0) return 0;

//   if (n === 1) return 1;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

function fibonacci(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
console.log(fibonacci(9)); // 34
// console.log(fibonacci(25)); // 75025
