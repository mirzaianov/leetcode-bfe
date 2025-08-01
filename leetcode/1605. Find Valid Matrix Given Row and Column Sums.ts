const restoreMatrix = (rowSum: number[], colSum: number[]): number[][] => {
  const n: number = rowSum.length;
  const m: number = colSum.length;
  const rows: number[] = [...rowSum];
  const cols: number[] = [...colSum];
  const res: number[][] = new Array(n).fill([]).map(() => new Array(m).fill(0));
  let i = 0;
  let j = 0;

  while (i < n && j < m) {
    res[i][j] = Math.min(rows[i], cols[j]);

    rows[i] -= res[i][j];
    cols[j] -= res[i][j];

    if (rows[i] === 0) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return res;
};

export default restoreMatrix;
