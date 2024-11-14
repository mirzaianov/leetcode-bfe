const toMap = (array: number[]): Map<number, number> => {
  const map = new Map<number, number>();

  for (let i = 0; i < array.length; i += 1) {
    if (!map.has(array[i])) map.set(array[i], i);
  }

  return map;
};

const anagramMappings = (a: number[], b: number[]): number[] => {
  const toMapB: Map<number, number> = toMap(b);
  const res: number[] = [];

  for (const num of a) {
    const value = toMapB.get(num);

    if (value !== undefined) {
      res.push(value);
    }
  }

  return res;
};

export default anagramMappings;
