const arraysIntersection = (arr1: number[], arr2: number[], arr3: number[]): number[] => {
  const store = new Map<number, number>();

  const toMap = (array: number[], map: Map<number, number>): void => {
    for (const item of array) {
      map.set(item, (map.get(item) || 0) + 1);
    }
  };

  toMap(arr1, store);
  toMap(arr2, store);
  toMap(arr3, store);

  const res: number[] = [];

  for (const [key, value] of store) {
    if (value === 3) res.push(key);
  }

  return res;
};

export default arraysIntersection;
