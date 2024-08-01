const returnToBoundaryCount = (nums: number[]): number => {
  let count = 0;
  let sum = 0;

  for (const n of nums) {
    sum += n;

    if (sum === 0) count += 1;
  }

  return count;
};

export default returnToBoundaryCount;
