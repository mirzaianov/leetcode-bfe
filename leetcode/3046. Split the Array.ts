const isPossibleToSplit = (nums: number[]): boolean => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);

    if (map.get(n)! > 2) return false;
  }

  return true;
};

export default isPossibleToSplit;
