const isEven = (num: number): boolean => {
  let n: number = num;
  let count = 0;

  while (n >= 1) {
    n /= 10;
    count += 1;
  }

  return count % 2 === 0;
};

const findNumbers = (nums: number[]): number => {
  let count = 0;

  for (const num of nums) {
    if (isEven(num)) count += 1;
  }

  return count;
};
