const countKDifference = (nums: number[], k: number): number => {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const diff: number = Math.abs(nums[i] - nums[j]);

      if (diff === k) count += 1;
    }
  }

  return count;
};

export default countKDifference;
