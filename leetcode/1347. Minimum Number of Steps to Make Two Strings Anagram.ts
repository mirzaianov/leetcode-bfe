const toMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const minSteps = (s: string, t: string): number => {
  const mapS: Map<string, number> = toMap(s);
  const mapT: Map<string, number> = toMap(t);
  let count = 0;

  for (const [key, value] of mapS) {
    const mapTValue: number | undefined = mapT.get(key);

    if (mapTValue !== undefined) {
      if (value === mapT.get(key)) {
        count += value;
      } else {
        count += Math.min(mapTValue, value);
      }
    }
  }

  return s.length - count;
};

export default minSteps;
