const countPoints = (points: number[][], queries: number[][]): number[] => {
  const calcDistance = (x1: number, y1: number, x2: number, y2: number): number =>
    Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  const res: number[] = [];

  for (const [centerX, centerY, radius] of queries) {
    let count = 0;

    for (const [pointX, pointY] of points) {
      if (calcDistance(centerX, centerY, pointX, pointY) <= radius) count += 1;
    }

    res.push(count);
  }

  return res;
};
