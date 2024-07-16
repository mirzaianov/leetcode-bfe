const maxProduct = (nums: number[]): number => {
  let max: number = nums[0];
  let prevMax: number = nums[0];
  let prevMin: number = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const options = [nums[i], nums[i] * prevMax, nums[i] * prevMin];

    prevMax = Math.max(...options);
    prevMin = Math.min(...options);
    max = Math.max(max, prevMax);
  }

  return max;
};

export default maxProduct;
