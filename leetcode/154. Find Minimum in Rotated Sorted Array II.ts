const findMin = (nums: number[]): number => {
  let l = 0;
  let r: number = nums.length - 1;

  while (l + 1 < r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (nums[m] > nums[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return Math.min(nums[l], nums[r]);
};
