const numSpecial = (mat) => {
  let count = 0;

  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[i].length; j += 1) {
      if (mat[i][j] === 1) {
        let colSum = 0;

        for (let k = 0; k < mat.length; k += 1) {
          colSum += mat[k][j];
        }

        const rowSum = mat[i].reduce((acc, item) => acc + item);

        if (colSum === 1 && rowSum === 1) count += 1;
      }
    }
  }

  return count;
};

console.log(
  numSpecial([
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]),
); // 2
