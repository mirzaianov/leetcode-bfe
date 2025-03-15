const smallestRangeI = (nums: number[], k: number): number => {
  const min: number = Math.min(...nums);
  const max: number = Math.max(...nums);
  const res: number = max - min - 2 * k;

  return res > 0 ? res : 0;
};

export default smallestRangeI;
