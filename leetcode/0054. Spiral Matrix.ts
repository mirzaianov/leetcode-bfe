const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];

  if (matrix.length === 0) {
    return result;
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      result.push(matrix[top][i]);
    }

    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      result.push(matrix[i][right]);
    }

    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }
    }

    bottom -= 1;

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }
    }

    left += 1;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
); // [1,2,3,4,8,12,11,10,9,5,6,7]
