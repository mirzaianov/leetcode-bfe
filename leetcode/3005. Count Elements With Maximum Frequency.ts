const maxFrequencyElements = (nums: number[]): number => {
  const map = new Map<number, number>();
  let max = -Infinity;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    max = Math.max(max, map.get(num)!);
  }

  return [...map.values()].filter((item) => item === max).reduce((acc, item) => acc + item, 0);
};
