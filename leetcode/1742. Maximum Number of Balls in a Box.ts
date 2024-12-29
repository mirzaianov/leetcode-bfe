const ballNumber = (num: number): number => {
  let division: number = num;
  let res = 0;

  while (division) {
    const remainder: number = division % 10;

    res += remainder;

    division = Math.floor(division / 10);
  }

  return res;
};

const countBalls = (lowLimit: number, highLimit: number): number => {
  const map = new Map<number, number>();

  for (let i = lowLimit; i <= highLimit; i += 1) {
    const curr: number = ballNumber(i);

    map.set(curr, (map.get(curr) || 0) + 1);
  }

  return Math.max(...map.values());
};

export default countBalls;
