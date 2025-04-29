const minOperations = (nums: number[], k: number): number =>
  nums.reduce((acc, item) => acc + item, 0) % k;

export default minOperations;
