const nearestValidPoint = (x, y, points) => {
  const len = points.length;
  let index = -1;
  let manh = Infinity;

  for (let i = 0; i < len; i += 1) {
    const [a, b] = points[i];

    if (x === a || y === b) {
      const current = Math.abs(x - a) + Math.abs(y - b);

      if (current < manh) {
        manh = current;
        index = i;
      }
    }
  }

  return index;
};
