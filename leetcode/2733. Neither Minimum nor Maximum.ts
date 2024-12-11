const findNonMinOrMax = (nums: number[]): number => {
  if (nums.length < 2) return -1;

  const min: number = Math.min(...nums);
  const max: number = Math.max(...nums);

  for (const n of nums) {
    if (n !== min && n !== max) return n;
  }

  return -1;
};

export default findNonMinOrMax;
