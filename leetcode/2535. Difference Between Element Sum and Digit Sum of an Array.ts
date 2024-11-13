const digitSum = (num: number): number => {
  let division: number = num;
  let sum = 0;

  while (division) {
    const remainder: number = division % 10;

    sum += remainder;
    division = Math.floor(division / 10);
  }

  return sum;
};

const differenceOfSum = (nums: number[]): number => {
  let diff = 0;

  for (const n of nums) {
    diff += n - digitSum(n);
  }

  return Math.abs(diff);
};

export default differenceOfSum;
