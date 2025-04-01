const findMaxK = (nums: number[]): number => {
  const set = new Set<number>();
  let max = -1;

  for (const num of nums) {
    if (set.has(-1 * num)) max = Math.max(max, Math.abs(num));

    set.add(num);
  }

  return max;
};

export default findMaxK;
