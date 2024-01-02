const maximumStrongPairXor = (nums: number[]): number => {
  const len: number = nums.length;
  let max: number = 0;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
        max = Math.max(max, nums[i] ^ nums[j]);
      }
    }
  }

  return max;
};
