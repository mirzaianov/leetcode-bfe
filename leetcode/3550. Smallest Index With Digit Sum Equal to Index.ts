const getSum = (n: number): number => {
  let sum = 0;

  while (n) {
    const rem: number = n % 10;

    sum += rem;
    n = Math.floor(n / 10);
  }

  return sum;
};

const smallestIndex = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i += 1) {
    if (i === getSum(nums[i])) return i;
  }

  return -1;
};

export default smallestIndex;
