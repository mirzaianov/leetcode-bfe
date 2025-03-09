const searchInsert = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
};

export default searchInsert;
