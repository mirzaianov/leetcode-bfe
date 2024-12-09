const divideDigits = (num: number): number[] => {
  const res: number[] = [];
  let division: number = num;

  while (division) {
    const remainder: number = division % 10;

    res.push(remainder);

    division = Math.floor(division / 10);
  }

  return res;
};

const isSelfDividing = (num: number): boolean => {
  const array: number[] = divideDigits(num);

  for (const digit of array) {
    if (num % digit !== 0) return false;
  }

  return true;
};

const selfDividingNumbers = (left: number, right: number): number[] => {
  const res: number[] = [];

  for (let i = left; i <= right; i += 1) {
    if (isSelfDividing(i)) res.push(i);
  }

  return res;
};

export default selfDividingNumbers;
