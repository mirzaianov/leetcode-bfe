const findFinalValue = (nums: number[], original: number): number => {
  const set = new Set<number>(nums);

  while (set.has(original)) {
    original *= 2;
  }

  return original;
};

export default findFinalValue;
