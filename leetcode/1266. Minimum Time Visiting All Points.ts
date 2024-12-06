const minTimeToVisitAllPoints = (points: number[][]): number => {
  let count = 0;

  for (let i = 1; i < points.length; i += 1) {
    const [xCurr, yCurr] = points[i];
    const [xPrev, yPrev] = points[i - 1];

    count += Math.max(Math.abs(xCurr - xPrev), Math.abs(yCurr - yPrev));
  }

  return count;
};

export default minTimeToVisitAllPoints;
