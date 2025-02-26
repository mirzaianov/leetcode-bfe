const kWeakestRows = (mat: number[][], k: number): number[] =>
  mat
    .map((item: number[], index: number) => [
      index,
      item.reduce((acc: number, value: number) => acc + value, 0),
    ])
    .sort((a, b) => a[1] - b[1])
    .map(([a]) => a)
    .slice(0, k);

export default kWeakestRows;
