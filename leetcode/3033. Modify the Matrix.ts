const modifiedMatrix = (matrix: number[][]): number[][] => {
  const maxValues: number[] = Array(matrix[0].length).fill(-Infinity);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      maxValues[j] = Math.max(maxValues[j], matrix[i][j]);
    }
  }

  const answer: number[][] = Array(matrix.length).fill(undefined);

  for (let i = 0; i < matrix.length; i += 1) {
    answer[i] = [...matrix[i]];
  }

  for (let i = 0; i < answer.length; i += 1) {
    for (let j = 0; j < answer[i].length; j += 1) {
      if (answer[i][j] === -1) {
        answer[i][j] = maxValues[j];
      }
    }
  }

  return answer;
};

export default modifiedMatrix;
