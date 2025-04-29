const subarraySum = (nums: number[]): number => {
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const start: number = Math.max(0, i - nums[i]);
    const subSum: number = nums.slice(start, i + 1).reduce((acc, item) => acc + item, 0);

    sum += subSum;
  }

  return sum;
};

export default subarraySum;
