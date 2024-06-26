const sortArrayByParity = (nums: number[]): number[] => {
  if (nums.length < 2) return nums;

  let l = 0;
  let r: number = nums.length - 1;

  while (l <= r) {
    if (nums[l] % 2 !== 0 && nums[r] % 2 === 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l += 1;
      r -= 1;
    }

    if (nums[l] % 2 === 0) l += 1;

    if (nums[r] % 2 !== 0) r -= 1;
  }

  return nums;
};
