const minOperations = (nums: number[], k: number): number => {
  const set = new Set<number>();

  for (const n of nums) {
    if (n < k) return -1;
    if (n > k) set.add(n);
  }

  return set.size;
};

export default minOperations;
