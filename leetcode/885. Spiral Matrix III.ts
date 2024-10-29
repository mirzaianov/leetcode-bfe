const spiralMatrixIII = (
  rows: number,
  cols: number,
  rStart: number,
  cStart: number,
): number[][] => {
  const directions: number[][] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const res: number[][] = [];
  let r: number = rStart;
  let c: number = cStart;
  let steps = 1;
  let dir = 0;

  while (res.length < rows * cols) {
    for (let i = 0; i < 2; i += 1) {
      const [dr, dc] = directions[dir];

      for (let j = 0; j < steps; j += 1) {
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          res.push([r, c]);
        }

        r += dr;
        c += dc;
      }

      dir = (dir + 1) % 4;
    }

    steps += 1;
  }

  return res;
};

export default spiralMatrixIII;
