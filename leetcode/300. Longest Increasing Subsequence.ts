const lengthOfLIS = (nums: number[]): number => {
  const len: number = nums.length;

  if (!len) return -1;

  if (len === 1) return 1;

  const LIS = Array(len).fill(1);

  for (let i = len - 2; i >= 0; i -= 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] < nums[j]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
      }
    }
  }

  return Math.max(...LIS);
};

export default lengthOfLIS;
