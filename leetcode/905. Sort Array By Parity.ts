const sortArrayByParity = (nums: number[]): number[] => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] % 2 === 0) {
      [nums[r], nums[l]] = [nums[l], nums[r]];
      l += 1;
    }

    r += 1;
  }

  return nums;
};

export default sortArrayByParity;
