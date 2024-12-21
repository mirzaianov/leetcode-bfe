const numberOfPairs = (nums: number[]): number[] => {
  const map = new Map<number, number>();
  let pairs = 0;

  for (const n of nums) {
    if (map.has(n)) {
      pairs += 1;
      map.delete(n);
    } else {
      map.set(n, 1);
    }
  }

  return [pairs, map.size];
};

export default numberOfPairs;
