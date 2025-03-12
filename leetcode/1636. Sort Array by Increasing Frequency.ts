const frequencySort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums;

  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return nums.sort((a, b) => map.get(a)! - map.get(b)! || b - a);
};

export default frequencySort;
