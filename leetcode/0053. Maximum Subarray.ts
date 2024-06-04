const maxSubArray = (nums: number[]): number => {
  let curSum: number = nums[0];
  let maxSum: number = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const cur = nums[i];

    curSum = Math.max(curSum + cur, cur);
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};

export default maxSubArray;
