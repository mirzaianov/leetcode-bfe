const numIdenticalPairs = (nums: number[]): number => {
  const map = new Map<number, number>();
  let count = 0;

  for (const num of nums) {
    if (map.has(num)) {
      const value = map.get(num) ?? 0;

      count += value;
      map.set(num, value + 1);
    } else {
      map.set(num, 1);
    }
  }

  return count;
};

export default numIdenticalPairs;
