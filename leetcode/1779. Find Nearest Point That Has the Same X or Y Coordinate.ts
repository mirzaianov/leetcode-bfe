const nearestValidPoint = (x: number, y: number, points: number[][]): number => {
  let min = Infinity;
  let index = -1;

  for (let i = 0; i < points.length; i += 1) {
    const [a, b] = points[i];

    if (a === x || b === y) {
      const val: number = Math.abs(a - x) + Math.abs(b - y);

      if (val < min) {
        min = val;
        index = i;
      }
    }
  }

  return index;
};

export default nearestValidPoint;
