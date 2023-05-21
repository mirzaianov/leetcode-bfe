var maxProduct = function (nums) {
  let max = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];
    prevMax = Math.max(...options);
    prevMin = Math.min(...options);

    max = Math.max(max, prevMax);
  }

  return max;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 3, -4])); // 24
