const maximumPopulation = (logs: number[][]): number => {
  const map = new Map<number, number>();
  let max = 0;

  for (const [b, d] of logs) {
    for (let i = b; i < d; i += 1) {
      map.set(i, (map.get(i) || 0) + 1);
      max = Math.max(max, map.get(i) || 0);
    }
  }

  const maxYears: number[][] = [...map.entries()]
    .filter(([, q]) => q === max)
    .sort((a, b) => a[0] - b[0]);

  return maxYears[0][0];
};

export default maximumPopulation;
