const hasAllSetBits = (n: number): boolean => {
  while (n) {
    if (!(n & 1)) return false;

    n >>= 1;
  }

  return true;
};

const smallestNumber = (n: number): number => {
  if (hasAllSetBits(n)) return n;

  return smallestNumber(n + 1);
};

export default smallestNumber;
