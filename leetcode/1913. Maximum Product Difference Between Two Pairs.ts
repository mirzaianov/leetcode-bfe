const maxProductDifference = (nums: number[]): number => {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max1 || nums[i] > max2) {
      max2 = Math.max(max1, max2);
      max1 = nums[i];
    }

    if (nums[i] < min1 || nums[i] < min2) {
      min2 = Math.min(min1, min2);
      min1 = nums[i];
    }
  }

  return max1 * max2 - min1 * min2;
};

export default maxProductDifference;
