var sumOfSquares = function (nums) {
  const n = nums.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (n % (i + 1) === 0) res += nums[i] ** 2;
  }

  return res;
};

console.log(sumOfSquares([1, 2, 3, 4])); // 21
console.log(sumOfSquares([2, 7, 1, 19, 18, 3])); // 63
