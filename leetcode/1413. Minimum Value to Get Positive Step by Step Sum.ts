const minStartValue = (nums: number[]): number => {
  let sum = 0;
  let minSum: number = nums[0];

  for (const num of nums) {
    sum += num;
    minSum = Math.min(minSum, sum);
  }

  return minSum > 0 ? 1 : Math.abs(minSum) + 1;
};

export default minStartValue;
