const searchRange = (nums: number[], target: number): number[] => {
  let l = 0;
  let r = nums.length - 1;
  let first = -1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (target <= nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }

    if (nums[m] === target) {
      first = m;
    }
  }

  l = 0;
  r = nums.length - 1;
  let last = -1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);

    if (target < nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }

    if (nums[m] === target) {
      last = m;
    }
  }

  return [first, last];
};

export default searchRange;
