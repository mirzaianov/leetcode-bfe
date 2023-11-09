const allCellsDistOrder = (rows, cols, rCenter, cCenter) => {
  const res = [];

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      res.push([i, j]);
    }
  }

  res.sort((a, b) => {
    const aRowDist = Math.abs(a[0] - rCenter);
    const aColDist = Math.abs(a[1] - cCenter);

    const bRowDist = Math.abs(b[0] - rCenter);
    const bColDist = Math.abs(b[1] - cCenter);

    return aRowDist + aColDist - (bRowDist + bColDist);
  });

  return res;
};

// console.log(allCellsDistOrder(1, 2, 0, 0)); // [[0,0],[0,1]]
console.log(allCellsDistOrder(2, 2, 0, 1)); // [[0,1],[0,0],[1,1],[1,0]]
// console.log(allCellsDistOrder(2, 3, 1, 2)); // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
