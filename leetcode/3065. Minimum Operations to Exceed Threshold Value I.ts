const minOperations = (nums: number[], k: number): number => {
  let count = 0;

  for (const n of nums) {
    if (n < k) count += 1;
  }

  return count;
};

export default minOperations;
