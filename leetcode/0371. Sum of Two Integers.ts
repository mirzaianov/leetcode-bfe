const getSum = (a: number, b: number): number => {
  while (b !== 0) {
    const temp: number = (a & b) << 1;

    a ^= b;
    b = temp;
  }

  return a;
};

export default getSum;
