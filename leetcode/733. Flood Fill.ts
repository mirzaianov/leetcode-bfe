const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  firstColor: number = image[sr][sc],
): number[][] => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[sr].length ||
    image[sr][sc] !== firstColor ||
    image[sr][sc] === color
  ) {
    return image;
  }

  image[sr][sc] = color;

  floodFill(image, sr + 1, sc, color, firstColor);
  floodFill(image, sr - 1, sc, color, firstColor);
  floodFill(image, sr, sc + 1, color, firstColor);
  floodFill(image, sr, sc - 1, color, firstColor);

  return image;
};
