const countDigits = (num: number): number => {
  let division: number = num;
  let count = 0;

  while (division) {
    const remainder: number = division % 10;

    division = Math.floor(division / 10);

    if (num % remainder === 0) count += 1;
  }

  return count;
};

export default countDigits;
