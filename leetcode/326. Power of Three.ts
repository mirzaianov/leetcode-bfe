const isPowerOfThree = (n: number): boolean => {
  const base = 3;
  const log: number = Math.log10(n) / Math.log10(base);

  return log % 1 === 0;
};

export default isPowerOfThree;
