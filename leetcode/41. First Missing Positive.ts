const firstMissingPositive = (nums: number[]): number => {
  const len: number = nums.length;

  for (let i = 0; i < len; i += 1) {
    if (nums[i] < 0) nums[i] = 0;
  }

  for (let i = 0; i < len; i += 1) {
    const curr: number = Math.abs(nums[i]);

    if (curr >= 0 && curr <= len) {
      if (nums[curr - 1] > 0) nums[curr - 1] *= -1;
      if (nums[curr - 1] === 0) nums[curr - 1] = -1 * (len + 1);
    }
  }

  for (let i = 1; i <= len; i += 1) {
    if (nums[i - 1] >= 0) return i;
  }

  return len + 1;
};

export default firstMissingPositive;
