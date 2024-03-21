const sortColors = (nums: number[]): void => {
  let left = 0;
  let right = nums.length - 1;
  let current = left;

  const swap = (i: number, j: number): void => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current);
      left += 1;
      current += 1;
    } else if (nums[current] === 2) {
      swap(right, current);
      right -= 1;
    } else {
      current += 1;
    }
  }
};
