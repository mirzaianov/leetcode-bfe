const uniquePaths = (m: number, n: number): number => {
  const r: number[] = Array(n).fill(1);

  for (let i = 1; i < m; i += 1) {
    for (let j = 1; j < n; j += 1) {
      r[j] += r[j - 1];
    }
  }

  return r[n - 1];
};

export default uniquePaths;
