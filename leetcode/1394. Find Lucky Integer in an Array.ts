const findLucky = (arr: number[]): number => {
  const map = new Map<number, number>();

  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  let max = -1;

  for (const [key, value] of map) {
    if (key === value) {
      max = Math.max(max, key);
    }
  }

  return max;
};

export default findLucky;
