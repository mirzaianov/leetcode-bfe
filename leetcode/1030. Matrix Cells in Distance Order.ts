const allCellsDistOrder = (
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number,
): number[][] => {
  const map = new Map<number, number[][]>();

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const dist: number = Math.abs(rCenter - i) + Math.abs(cCenter - j);
      const coord: number[] = [i, j];

      if (!map.get(dist)) {
        map.set(dist, [coord]);
      } else {
        const value = map.get(dist);

        if (value) {
          map.set(dist, [...value, coord]);
        }
      }
    }
  }

  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map((item) => item[1])
    .flat(1);
};

export default allCellsDistOrder;
