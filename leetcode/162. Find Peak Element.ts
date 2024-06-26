const findPeakElement = (nums: number[]): number => {
  const n: number = nums.length;

  if (n === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let l = 0;
  let r: number = n - 2;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
      return m;
    }

    if (nums[m] < nums[m - 1]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
};

export default findPeakElement;
