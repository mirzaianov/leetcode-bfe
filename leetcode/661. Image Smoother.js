const imageSmoother = (img) => {
  const helper = (i, j, matrix) => {
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

  const smoothedImg = img.map((row) => [...row]);

  for (let i = 0; i < img.length; i += 1) {
    for (let j = 0; j < img[i].length; j += 1) {
      const [sum, quantity] = helper(i, j, img);

      smoothedImg[i][j] = Math.floor(sum / quantity);
    }
  }

  return smoothedImg;
};

console.log(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ]),
); // [[137, 141, 137], [141, 138, 141], [137, 141, 137]]
