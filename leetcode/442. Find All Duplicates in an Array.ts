const findDuplicates = (nums: number[]): number[] => {
  const res = [];

  for (let i = 0; i < nums.length; i += 1) {
    const idx = Math.abs(nums[i]) - 1;
    const val = nums[idx];

    if (val > 0) {
      nums[idx] = -nums[idx];
    } else {
      res.push(Math.abs(nums[i]));
    }
  }

  return res;
};

export default findDuplicates;
