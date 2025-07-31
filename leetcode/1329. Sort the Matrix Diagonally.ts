const diagonalSort = (mat: number[][]): number[][] => {
  const n: number = mat.length;
  const m: number = mat[0].length;

  for (let i = 2 - n; i < m; i += 1) {
    const d: number[] = new Array(n);
    let k = 0;

    for (let j = 0; j < n; j += 1) {
      if (mat[j][i + j]) {
        d[k] = mat[j][i + j];
        k += 1;
      }
    }

    d.sort((a, b) => a - b);
    k = 0;

    for (let j = 0; j < n; j += 1) {
      if (mat[j][i + j]) {
        mat[j][i + j] = d[k];
        k += 1;
      }
    }
  }

  return mat;
};

export default diagonalSort;
