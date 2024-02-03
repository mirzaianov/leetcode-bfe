const findRestaurant = (list1: string[], list2: string[]): string[] => {
  const toMap = (array: string[]): Map<string, number> => {
    const map = new Map<string, number>();

    for (let i = 0; i < array.length; i += 1) {
      map.set(array[i], i);
    }

    return map;
  };

  const map1 = toMap(list1);
  const map2 = toMap(list2);
  const mapFinal = new Map<string, number>();
  let min = Infinity;

  for (const [key, value] of map1) {
    if (map2.has(key)) {
      const sum = map1.get(key)! + map2.get(key)!;

      mapFinal.set(key, sum);
      min = Math.min(min, sum);
    }
  }

  const res: string[] = [];

  for (const [key, value] of mapFinal) {
    if (value === min) res.push(key);
  }

  return res;
};
