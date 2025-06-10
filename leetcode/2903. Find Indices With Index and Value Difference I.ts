const findIndices = (
  nums: number[],
  indexDifference: number,
  valueDifference: number,
): number[] => {
  const n: number = nums.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const idxDif: number = Math.abs(i - j);
      const valDif: number = Math.abs(nums[i] - nums[j]);

      if (idxDif >= indexDifference && valDif >= valueDifference) return [i, j];
    }
  }

  return [-1, -1];
};

export default findIndices;
