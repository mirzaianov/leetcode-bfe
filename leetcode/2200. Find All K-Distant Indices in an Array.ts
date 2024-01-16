const findKDistantIndices = (nums: number[], key: number, k: number): number[] => {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === key) {
      for (let j = i - k; j < i + k + 1; j += 1) {
        if (Math.abs(i - j) <= k && j >= 0) set.add(j);
      }
    }
  }

  return Array.from(set.values());
};
