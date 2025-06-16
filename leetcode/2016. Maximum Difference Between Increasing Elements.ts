const maximumDifference = (nums: number[]): number => {
  let min: number = nums[0];
  let max = -1;

  for (let i = 1; i < nums.length; i += 1) {
    if (min >= nums[i]) {
      min = nums[i];
    } else {
      max = Math.max(max, nums[i] - min);
    }
  }

  return max;
};

export default maximumDifference;
