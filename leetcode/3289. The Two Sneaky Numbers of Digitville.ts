const getSneakyNumbers = (nums: number[]): number[] => {
  const set = new Set<number>();
  const res: number[] = [];

  for (const n of nums) {
    if (set.has(n)) {
      res.push(n);
    }

    set.add(n);
  }

  return res;
};

export default getSneakyNumbers;
