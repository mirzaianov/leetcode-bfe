const topKFrequent = (nums: number[], k: number): number[] => {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return Array.from(map.keys())
    .sort((a, b) => map.get(b)! - map.get(a)!)
    .splice(0, k);
};
