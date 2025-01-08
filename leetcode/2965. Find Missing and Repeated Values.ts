const toMap = (arr: number[]): Map<number, number> => {
  const map = new Map<number, number>();

  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  return map;
};

const findMissingAndRepeatedValues = (grid: number[][]): number[] => {
  const arr: number[] = grid.flat();
  const map: Map<number, number> = toMap(arr);
  const res: number[] = [];

  for (let i = 1; i <= arr.length; i += 1) {
    if (map.has(i) && map.get(i) === 2) res[0] = i;
    if (!map.has(i)) res[1] = i;
  }

  return res;
};

export default findMissingAndRepeatedValues;
