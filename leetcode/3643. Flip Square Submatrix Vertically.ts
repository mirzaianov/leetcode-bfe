const reverseSubmatrix = (grid: number[][], x: number, y: number, k: number): number[][] => {
  const res: number[][] = grid.map((item) => [...item]);
  let top: number = x;
  let bottom: number = x + k - 1;

  while (top < bottom) {
    for (let col = 0; col < k; col += 1) {
      [res[top][y + col], res[bottom][y + col]] = [res[bottom][y + col], res[top][y + col]];
    }

    top += 1;
    bottom -= 1;
  }

  return res;
};

export default reverseSubmatrix;
