const minOperations = (nums: number[], k: number): number => {
  const set = new Set<number>();
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const curr: number = nums[i];

    if (curr <= k) set.add(curr);

    count += 1;

    if (set.size === k) return count;
  }

  return count;
};

export default minOperations;
