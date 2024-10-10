const toMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const rearrangeCharacters = (s: string, target: string): number => {
  const targetToMap: Map<string, number> = toMap(target);
  const sToMap: Map<string, number> = toMap(s);
  let min = Infinity;

  for (const [key, value] of targetToMap) {
    if (!sToMap.has(key) || sToMap.get(key)! < value) return 0;

    const currValue: number = Math.floor(sToMap.get(key)! / value);

    min = Math.min(min, currValue);
  }

  return min;
};

export default rearrangeCharacters;
