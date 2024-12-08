const countGoodRectangles = (rectangles: number[][]): number => {
  let maxK = 0;
  let maxCount = 0;

  for (const rectangle of rectangles) {
    const k = Math.min(rectangle[0], rectangle[1]);

    if (k > maxK) {
      maxK = k;
      maxCount = 1;
    } else if (k === maxK) {
      maxCount += 1;
    }
  }

  return maxCount;
};

export default countGoodRectangles;
