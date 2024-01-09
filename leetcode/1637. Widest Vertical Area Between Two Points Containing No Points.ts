const maxWidthOfVerticalArea = (points: number[][]): number => {
  points.sort((a, b) => a[0] - b[0]);

  let max = 0;

  for (let i = 1; i < points.length; i += 1) {
    const current: number = points[i][0] - points[i - 1][0];

    max = Math.max(max, current);
  }

  return max;
};
