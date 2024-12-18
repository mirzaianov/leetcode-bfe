const areOccurrencesEqual = (s: string): boolean => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return new Set(map.values()).size === 1;
};

export default areOccurrencesEqual;
