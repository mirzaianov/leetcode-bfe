const maxProduct = (nums: number[]): number => {
  let max1 = 0;
  let max2 = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (max1 <= nums[i]) {
      max2 = max1;
      max1 = nums[i];
      continue;
    }

    if (max2 <= nums[i]) {
      max2 = nums[i];
    }
  }

  return (max1 - 1) * (max2 - 1);
};

export default maxProduct;
