const uniqueOccurrences = (arr: number[]): boolean => {
  const map = new Map<number, number>();

  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  const set = new Set<number>();

  for (const [, value] of map) {
    if (set.has(value)) return false;

    set.add(value);
  }

  return true;
};

export default uniqueOccurrences;
