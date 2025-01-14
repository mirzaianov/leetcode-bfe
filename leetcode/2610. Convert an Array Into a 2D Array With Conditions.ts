const findMatrix = (nums: number[]): number[][] => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const res: number[][] = [];

  while (map.size) {
    const curr: number[] = [];

    for (const [key, value] of map) {
      curr.push(key);

      if (value === 1) {
        map.delete(key);
      } else {
        map.set(key, value - 1);
      }
    }

    res.push(curr);
  }

  return res;
};

export default findMatrix;
