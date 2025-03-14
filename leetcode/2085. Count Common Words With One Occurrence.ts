const toMap = (words: string[]): Map<string, number> => {
  const map = new Map<string, number>();

  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  return map;
};

const countWords = (words1: string[], words2: string[]): number => {
  const map1: Map<string, number> = toMap(words1);
  const map2: Map<string, number> = toMap(words2);
  let count = 0;

  for (const [key1, value1] of map1) {
    const value2: number | undefined = map2.get(key1);

    if (value2 && value2 === value1 && value2 === 1) count += 1;
  }

  return count;
};

export default countWords;
