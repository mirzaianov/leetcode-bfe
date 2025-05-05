const maxAdjacentDistance = (nums: number[]): number => {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (i === nums.length - 1) {
      max = Math.max(max, Math.abs(nums[i] - nums[0]));
    } else {
      max = Math.max(max, Math.abs(nums[i] - nums[i + 1]));
    }
  }

  return max;
};

export default maxAdjacentDistance;
