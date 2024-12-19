const repeatedNTimes = (nums: number[]): number => {
  const set = new Set<number>();

  for (const n of nums) {
    if (set.has(n)) return n;

    set.add(n);
  }

  return -1;
};

export default repeatedNTimes;
