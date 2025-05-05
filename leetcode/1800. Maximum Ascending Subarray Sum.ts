const maxAscendingSum = (nums: number[]): number => {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    nums[i] > nums[i - 1] ? (sum += nums[i]) : (sum = nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};

export default maxAscendingSum;
