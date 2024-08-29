const minimumCost = (nums: number[]): number => {
  const nums2 = nums.slice(1);

  nums2.sort((a, b) => a - b);

  return nums[0] + nums2[0] + nums2[1];
};

export default minimumCost;
