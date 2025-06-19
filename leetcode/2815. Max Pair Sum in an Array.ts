const maxDigit = (n: number): number => {
  let max = -Infinity;

  while (n) {
    const rem: number = n % 10;

    max = Math.max(max, rem);
    n = Math.floor(n / 10);
  }

  return max;
};

const maxSum = (nums: number[]): number => {
  const len: number = nums.length;
  let max = -1;

  for (let i = 0; i < len; i += 1) {
    const firstNum: number = nums[i];
    const firstMaxDigit: number = maxDigit(firstNum);

    for (let j = i + 1; j < len; j += 1) {
      const secondNum: number = nums[j];
      const secondMaxDigit: number = maxDigit(secondNum);

      if (firstMaxDigit === secondMaxDigit) {
        max = Math.max(max, firstNum + secondNum);
      }
    }
  }

  return max;
};

export default maxSum;
