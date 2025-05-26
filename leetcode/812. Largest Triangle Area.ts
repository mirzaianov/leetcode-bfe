const getArea = (a: number[], b: number[], c: number[]): number =>
  Math.abs(a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])) / 2;

const largestTriangleArea = (points: number[][]): number => {
  const n: number = points.length;
  let max = 0;

  for (let i = 0; i < n - 2; i += 1) {
    for (let j = i + 1; j < n - 1; j += 1) {
      for (let k = j + 1; k < n; k += 1) {
        const curr: number = getArea(points[i], points[j], points[k]);

        max = Math.max(max, curr);
      }
    }
  }

  return max;
};

export default largestTriangleArea;
