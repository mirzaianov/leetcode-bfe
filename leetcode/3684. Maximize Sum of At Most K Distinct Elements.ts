const maxKDistinct = (nums: number[], k: number): number[] =>
  [...new Set(nums)].sort((a, b) => b - a).slice(0, k);

export default maxKDistinct;
