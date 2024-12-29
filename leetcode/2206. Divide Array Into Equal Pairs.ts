const divideArray = (nums: number[]): boolean => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (const [, value] of map) {
    if (value % 2 !== 0) return false;
  }

  return true;
};

export default divideArray;
