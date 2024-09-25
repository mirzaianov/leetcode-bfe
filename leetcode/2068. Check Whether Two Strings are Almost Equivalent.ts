const wordToMap = (w: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of w) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  return map;
};

const checkAlmostEquivalent = (word1: string, word2: string): boolean => {
  const map1: Map<string, number> = wordToMap(word1);
  const map2: Map<string, number> = wordToMap(word2);

  for (const [key, value] of map1) {
    if (Math.abs((map2.get(key) || 0) - value) > 3) return false;
  }

  for (const [key, value] of map2) {
    if (Math.abs((map1.get(key) || 0) - value) > 3) return false;
  }

  return true;
};

export default checkAlmostEquivalent;
