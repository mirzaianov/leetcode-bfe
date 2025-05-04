const sumOfGoodNumbers = (nums: number[], k: number): number => {
  const lim = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const curr: number = nums[i];

    if ((nums[i - k] || lim) < curr && curr > (nums[i + k] || lim)) {
      sum += curr;
    }
  }

  return sum;
};

export default sumOfGoodNumbers;
