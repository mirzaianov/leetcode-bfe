const mergeSimilarItems = (items1: number[][], items2: number[][]): number[][] => {
  const map = new Map<number, number>();

  const toMap = (array: number[][]): void => {
    for (const [v, w] of array) {
      map.set(v, (map.get(v) || 0) + w);
    }
  };

  toMap(items1);
  toMap(items2);

  return [...map.entries()].sort((a, b) => a[0] - b[0]);
};

export default mergeSimilarItems;
