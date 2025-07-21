const reverseNumber = (n: number): number => {
  let res = 0;

  while (n) {
    const rem: number = n % 10;

    res = res * 10 + rem;
    n = Math.floor(n / 10);
  }

  return res;
};

const countDistinctIntegers = (nums: number[]): number => {
  const set = new Set<number>();

  for (const n of nums) {
    const r: number = reverseNumber(n);

    set.add(n);
    set.add(r);
  }

  return set.size;
};

export default countDistinctIntegers;
