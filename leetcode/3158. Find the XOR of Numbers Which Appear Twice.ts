const duplicateNumbersXOR = (nums: number[]): number => {
  const set = new Set<number>();
  let res = 0;

  for (const n of nums) {
    if (set.has(n)) res ^= n;

    set.add(n);
  }

  return res;
};

export default duplicateNumbersXOR;
