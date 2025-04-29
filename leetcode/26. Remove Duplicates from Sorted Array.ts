const removeDuplicates = (nums: number[]): number => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l += 1;
    }

    r += 1;
  }

  return l;
};

export default removeDuplicates;
