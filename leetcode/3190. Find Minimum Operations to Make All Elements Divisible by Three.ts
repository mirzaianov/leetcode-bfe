const minimumOperations = (nums: number[]): number => {
  let count = 0;

  for (const n of nums) {
    if (n % 3 !== 0) count += 1;
  }

  return count;
};

export default minimumOperations;
