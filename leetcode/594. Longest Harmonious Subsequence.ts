const findLHS = (nums: number[]): number => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let res = 0;

  for (const [key] of map) {
    const curr: number | undefined = map.get(key);
    const next: number | undefined = map.get(key + 1);

    if (curr && next) {
      res = Math.max(res, curr + next);
    }
  }

  return res;
};

export default findLHS;
