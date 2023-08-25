function minSubsequence(nums) {
  nums.sort((a, b) => b - a);

  let i = 0;
  let leftSum = 0;
  let rightSum = nums.reduce((s, e) => s + e, 0);

  while (leftSum <= rightSum) {
    leftSum += nums[i];
    rightSum -= nums[i];

    i++;
  }

  return nums.slice(0, i);
}

console.log(minSubsequence([4, 3, 10, 9, 8])); // [10, 9]
console.log(minSubsequence([4, 4, 7, 6, 7])); // [7, 7, 6]
console.log(minSubsequence([6])); // [6]
console.log(minSubsequence([8, 8])); // []
