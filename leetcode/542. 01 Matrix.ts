const updateMatrix = (mat: number[][]): number[][] => {
  if (!mat || mat.length === 0 || mat[0].length === 0) return [];

  const m: number = mat.length;
  const n: number = mat[0].length;
  const queue: number[][] = [];
  const MAX_VALUE: number = m * n;

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = MAX_VALUE;
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const top = queue.shift();

    if (top !== undefined) {
      const [row, col] = top;

      for (const [dr, dc] of directions) {
        const r = row + dr;
        const c = col + dc;

        if (r >= 0 && r < m && c >= 0 && c < n && mat[r][c] > mat[row][col] + 1) {
          queue.push([r, c]);
          mat[r][c] = mat[row][col] + 1;
        }
      }
    }
  }

  return mat;
};
