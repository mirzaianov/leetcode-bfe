const toMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const maxNumberOfBalloons = (text: string, pattern: string = `balloon`): number => {
  const target: Map<string, number> = toMap(pattern);
  const base: Map<string, number> = toMap(text);
  let min = Infinity;

  for (const [key, value] of target) {
    if (!base.has(key) || base.get(key)! < value) return 0;

    const currValue: number = Math.floor(base.get(key)! / value);

    min = Math.min(min, currValue);
  }

  return min;
};

export default maxNumberOfBalloons;
