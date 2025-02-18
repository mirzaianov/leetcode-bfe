const minimumOperations = (nums: number[]): number => {
  const set = new Set<number>(nums);

  return set.has(0) ? set.size - 1 : set.size;
};

export default minimumOperations;
