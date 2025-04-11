const helper = (i: number, j: number, matrix: number[][]): [number, number] => {
  let sum = 0;
  let quantity = 9;

  for (let x = i - 1; x <= i + 1; x += 1) {
    for (let y = j - 1; y <= j + 1; y += 1) {
      if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length) {
        sum += matrix[x][y];
      } else {
        quantity -= 1;
      }
    }
  }

  return [sum, quantity];
};

const imageSmoother = (img: number[][]): number[][] => {
  const matrix = img.map((row) => [...row]);

  for (let i = 0; i < img.length; i += 1) {
    for (let j = 0; j < img[i].length; j += 1) {
      const [sum, quantity] = helper(i, j, img);

      matrix[i][j] = Math.floor(sum / quantity);
    }
  }

  return matrix;
};

export default imageSmoother;
