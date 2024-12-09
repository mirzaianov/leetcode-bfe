const minOperations = (nums: number[]): number => {
  const len: number = nums.length;

  if (len < 2) return 0;

  let prev: number = nums[0];
  let count = 0;

  for (let i = 1; i < len; i += 1) {
    const curr: number = nums[i];

    if (curr <= prev) {
      const diff: number = prev - curr + 1;

      count += diff;
      prev = curr + diff;
    } else {
      prev = curr;
    }
  }

  return count;
};

export default minOperations;
