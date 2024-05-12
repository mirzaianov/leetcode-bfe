const searchMatrix = (matrix: number[][], target: number): boolean => {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
      const curr: number = matrix[i][j];

      if (curr === target) return true;

      if (curr < target) break;
    }
  }

  return false;
};

export default searchMatrix;
