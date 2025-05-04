const minimumOperations = (nums: number[], k: number = 3): number => {
  let count = 0;

  for (let i = 0; i < nums.length; i += k) {
    const arr: number[] = nums.slice(i);
    const set = new Set<number>(arr);

    if (arr.length === set.size) return count;

    count += 1;
  }

  return count;
};

export default minimumOperations;
