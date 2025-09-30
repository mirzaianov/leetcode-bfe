const triangularSum = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];

  const store: number[] = [];

  for (let i = 1; i < nums.length; i += 1) {
    const curr: number = (nums[i - 1] + nums[i]) % 10;

    store.push(curr);
  }

  return triangularSum(store);
};

export default triangularSum;
