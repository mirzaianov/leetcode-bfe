const findSum = (num: number): number => {
  let sum = 0;
  let division: number = num;

  while (division) {
    const remainder: number = division % 10;

    sum += remainder;

    division = Math.floor(division / 10);
  }

  return sum;
};

const sumOfDigits = (nums: number[]): boolean => findSum(Math.min(...nums)) % 2 === 0;

export default sumOfDigits;
