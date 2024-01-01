const findMaxAverage = (nums: number[], k: number): number => {
  const store: number[] = nums.slice(0, k);
  let sum: number = store.reduce((acc, item) => acc + item, 0);
  let max: number = sum / k;

  for (let i = k; i < nums.length; i += 1) {
    sum += -nums[i - k] + nums[i];
    max = Math.max(max, sum / k);
  }

  return max;
};
