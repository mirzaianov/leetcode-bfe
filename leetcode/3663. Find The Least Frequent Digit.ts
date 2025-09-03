const getLeastFrequentDigit = (n: number): number => {
  const map = new Map<number, number>();

  while (n) {
    const rem: number = n % 10;

    map.set(rem, (map.get(rem) || 0) + 1);

    n = Math.floor(n / 10);
  }

  const sorted: number[][] = [...map.entries()].sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  return sorted[0][0];
};

export default getLeastFrequentDigit;
