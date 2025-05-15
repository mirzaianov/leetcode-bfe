const hasAlternatingBits = (n: number): boolean => {
  if (n < 2) return true;

  let temp: number = n & 1;

  n >>= 1;

  while (n) {
    const curr: number = n & 1;

    if (temp === curr) return false;

    temp = curr;
    n >>= 1;
  }

  return true;
};

export default hasAlternatingBits;
