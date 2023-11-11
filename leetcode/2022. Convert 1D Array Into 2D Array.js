const construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  const matrix = [];
  let index = 0;

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(original[index]);
      index++;
    }

    matrix.push(row);
  }

  return matrix;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
