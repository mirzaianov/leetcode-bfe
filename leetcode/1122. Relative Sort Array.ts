const relativeSortArray = (arr1: number[], arr2: number[]): number[] => {
  const map = new Map<number, number>();

  for (const item of arr1) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  const res: number[] = [];

  for (const item of arr2) {
    const value: number = map.get(item)!;

    for (let i = 0; i < value; i += 1) {
      res.push(item);
    }

    map.delete(item);
  }

  const remainItems: number[][] = Array.from(map).sort((a, b) => a[0] - b[0]);

  for (const [key, value] of remainItems) {
    for (let i = 0; i < value; i += 1) {
      res.push(key);
    }
  }

  return res;
};

export default relativeSortArray;
