const longestConsecutive = (nums: number[]): number => {
  const set = new Set<number>(nums);
  let max = 0;

  for (const item of set) {
    if (!set.has(item - 1)) {
      let next = item;

      while (set.has(next)) next += 1;

      max = Math.max(max, next - item);
    }
  }

  return max;
};
