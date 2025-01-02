const isPowerOfFour = (n: number): boolean => {
  const base = 4;
  const log: number = Math.log10(n) / Math.log10(base);

  return log % 1 === 0;
};

export default isPowerOfFour;
