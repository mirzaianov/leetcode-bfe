const numSpecial = (mat: number[][]): number => {
  const m = mat.length;
  const n = mat[0].length;

  const rowSums = new Array(m).fill(0);
  const colSums = new Array(n).fill(0);

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (mat[i][j] === 1) {
        rowSums[i] += 1;
        colSums[j] += 1;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (mat[i][j] === 1 && rowSums[i] === 1 && colSums[j] === 1) count += 1;
    }
  }

  return count;
};

export default numSpecial;
