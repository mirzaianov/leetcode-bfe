const minChanges = (n: number, k: number): number => {
  let count = 0;

  while (n || k) {
    const nLSB: number = n & 1;
    const kLSB: number = k & 1;

    if (kLSB === 1 && nLSB === 0) return -1;
    if (kLSB === 0 && nLSB === 1) count += 1;

    n >>= 1;
    k >>= 1;
  }

  return count;
};

export default minChanges;
