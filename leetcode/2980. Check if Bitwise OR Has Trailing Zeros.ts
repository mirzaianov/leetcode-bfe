const hasTrailingZeros = (nums: number[]): boolean => {
  let count = 0;

  for (const num of nums) {
    if (num % 2 === 0) count += 1;
  }

  return count > 1;
};
