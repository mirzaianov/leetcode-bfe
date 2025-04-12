const findDigitSum = (n: number): number => {
  let sum = 0;

  while (n) {
    const remainder: number = n % 10;

    sum += remainder;

    n = Math.floor(n / 10);
  }

  return sum;
};

const countLargestGroup = (n: number): number => {
  const map = new Map<number, number>();

  for (let i = 1; i <= n; i += 1) {
    const sum: number = findDigitSum(i);

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  let max = -Infinity;
  let count = 1;

  for (const [, value] of map) {
    if (value > max) {
      max = value;
      count = 1;
    } else if (value === max) {
      count += 1;
    }
  }

  return count;
};

export default countLargestGroup;
