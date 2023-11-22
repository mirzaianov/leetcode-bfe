const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
      if (matrix[i][j] === target) return true;
      if (matrix[i][j] < target) break;
    }
  }

  return false;
};

// true
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
);
// false
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20,
  ),
);
