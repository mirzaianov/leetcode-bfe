const reverse = (x: number): number => {
  const sign: number = Math.sign(x);
  let division: number = Math.abs(x);
  let num: number = 0;

  while (division) {
    const remainder: number = division % 10;

    num = num * 10 + remainder;
    division = Math.floor(division / 10);
  }

  if (num < -1 * 2 ** 31 || num > 2 ** 31 - 1) return 0;

  return sign * num;
};

export default reverse;
