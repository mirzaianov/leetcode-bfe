const sumOfUnique = (nums: number[]): number => {
  const map = new Map<number, number>();
  let sum = 0;

  for (const n of nums) {
    if (!map.has(n)) {
      sum += n;
      map.set(n, 1);
    } else if (map.get(n) === 1) {
      sum -= n;
      map.set(n, 0);
    }
  }

  return sum;
};

export default sumOfUnique;
