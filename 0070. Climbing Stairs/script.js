// const climbStairs = function (n) {
//     if (n === 0) {
//         return 0;
//     } else if (n < 3) {
//         return n;
//     } else {
//         return climbStairs(n - 1) + climbStairs(n - 2);
//     }
// };

// const climbStairs = function (n) {
//     if (n === 1) {
//         return 1;
//     }

//     n1 = 1;
//     n2 = 2;

//     for (let i = 3; i < n + 1; i++) {
//         [n1, n2] = [n2, n1 + n2];
//     }

//     return n2;
// };

// const climbStairs = function (n) {
//   let memo = {};

//   return count(n);

//   function count(k) {
//     if (memo[k]) return memo[k];
//     if (k === 2) return 2;
//     if (k <= 1) return 1;

//     memo[k] = count(k - 1) + count(k - 2);
//     return memo[k];
//   }
// };

const climbStairs = function (n) {
  let one = 1,
    two = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = one;
    one += two;
    two = temp;
  }

  return one;
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
console.log(climbStairs(10)); // 89
