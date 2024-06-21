const findMin = (nums: number[]): number => {
  const len: number = nums.length;
  let l = 0;
  let r: number = len - 1;

  if (len === 1 || nums[l] < nums[r]) return nums[0];

  while (l < r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return nums[l];
};

export default findMin;
