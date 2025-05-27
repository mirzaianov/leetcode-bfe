const isMonotonic = (nums: number[]): boolean => {
  let dir: boolean | undefined;

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] === nums[i + 1]) continue;

    if (dir === undefined) {
      dir = nums[i] < nums[i + 1];
      continue;
    }

    if (dir && nums[i] > nums[i + 1]) return false;

    if (!dir && nums[i] < nums[i + 1]) return false;
  }

  return true;
};

export default isMonotonic;
