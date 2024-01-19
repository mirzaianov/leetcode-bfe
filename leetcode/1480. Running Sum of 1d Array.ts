const runningSum = (nums: number[]): number[] => {
  const len: number = nums.length;

  for (let i = 1; i < len; i += 1) {
    nums[i] += nums[i - 1];
  }

  return nums;
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
