const transpose = (matrix) => {
  const res = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    const subArray = [];

    for (let j = 0; j < matrix.length; j += 1) {
      subArray.push(matrix[j][i]);
    }

    res.push(subArray);
  }

  return res;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ]),
); // [[1, 4], [2, 5], [3, 6]]
