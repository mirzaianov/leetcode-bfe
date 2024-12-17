const sumZero = (n: number): number[] => {
  const res: number[] = n % 2 === 0 ? [] : [0];

  for (let i = 1; i <= Math.floor(n / 2); i += 1) {
    res.push(-i, i);
  }

  return res;
};

export default sumZero;
