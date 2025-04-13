const countDigitSum = (num: number): number => {
  let sum = 0;

  while (num) {
    const rem: number = num % 10;

    sum += rem;

    num = Math.floor(num / 10);
  }

  return sum;
};

const countEven = (num: number): number => {
  let count = 0;

  for (let i = 1; i <= num; i += 1) {
    if (countDigitSum(i) % 2 === 0) count += 1;
  }

  return count;
};

export default countEven;
