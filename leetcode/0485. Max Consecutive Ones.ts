const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;
  let onesCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 1 && nums[left] === nums[right]) {
      onesCount += 1;
      max = Math.max(max, onesCount);
      right += 1;
    } else if (nums[right] === 0) {
      onesCount = 0;
      right += 1;
      left = right;
    }
  }

  return max;
};
