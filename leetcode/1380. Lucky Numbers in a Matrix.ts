const luckyNumbers = (matrix: number[][]): number[] => {
  for (let i = 0; i < matrix.length; i += 1) {
    const min = Math.min(...matrix[i]);
    const idx = matrix[i].indexOf(min);

    if (matrix.every((arr: number[]) => arr[idx] <= min)) return [min];
  }

  return [];
};

export default luckyNumbers;
