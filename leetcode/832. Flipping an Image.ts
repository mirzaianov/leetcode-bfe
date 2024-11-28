const flipAndInvertImage = (image: number[][]): number[][] => {
  const flipped: number[][] = image.map((item) => item.reverse());

  for (let i = 0; i < flipped.length; i += 1) {
    for (let j = 0; j < flipped[i].length; j += 1) {
      flipped[i][j] = flipped[i][j] === 1 ? 0 : 1;
    }
  }

  return flipped;
};

export default flipAndInvertImage;
