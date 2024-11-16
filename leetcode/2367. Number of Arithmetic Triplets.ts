const arithmeticTriplets = (nums: number[], diff: number): number => {
  const set = new Set<number>(nums);
  let count = 0;

  for (const num of nums) {
    if (set.has(num + diff) && set.has(num + 2 * diff)) count += 1;
  }

  return count;
};

export default arithmeticTriplets;
