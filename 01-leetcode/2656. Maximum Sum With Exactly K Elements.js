// var maximizeSum = function (nums, k) {
//   let sum = 0;

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < k; i++) {
//     let cur = nums.pop();

//     sum += cur;
//     nums.push(cur + 1);
//   }

//   return sum;
// };

// #2

var maximizeSum = function (nums, k) {
  const max = Math.max(...nums);

  return sum(max, 0, k);

  function sum(num, curr, rep) {
    if (rep === 0) return curr;

    return sum(num + 1, curr + num, rep - 1);
  }
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3)); // 18
console.log(maximizeSum([5, 5, 5], 2)); // 11
