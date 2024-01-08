const longestAlternatingSubarray = (nums: number[], threshold: number): number => {
  let counter: number = -1;
  let index: number = -1;

  for (let i: number = 0; i < nums.length; i += 1) {
    if (index === -1 && nums[i] % 2 === 0) index = i;
    if (nums[i] > threshold) index = -1;
    if (index >= 0) counter = Math.max(i - index, counter);
    if (i < nums.length - 1 && nums[i] % 2 === nums[i + 1] % 2) index = -1;
  }

  return counter + 1;
};
