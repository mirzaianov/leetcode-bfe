const search = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (nums[m] === target) return m;

    if (nums[m] < nums[l]) {
      if (nums[m] <= target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (nums[l] <= target && target <= nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
};

export default search;
