const stringToMap = (s: string): Map<string, number> => {
  const map = new Map<string, number>();

  for (const l of s) {
    if (l.match(/[a-zA-Z]/)) {
      const curr: string = l.toLowerCase();

      map.set(curr, (map.get(curr) || 0) + 1);
    }
  }

  return map;
};

const compareValues = (base: Map<string, number>, target: Map<string, number>): boolean => {
  for (const [key, value] of base) {
    if (!target.has(key) || target.get(key)! < value) return false;
  }

  return true;
};

const shortestCompletingWord = (licensePlate: string, words: string[]): string => {
  const base: Map<string, number> = stringToMap(licensePlate);
  const res: [number, string] = [Infinity, ''];

  for (const word of words) {
    const len: number = word.length;
    const curr: Map<string, number> = stringToMap(word);

    if (compareValues(base, curr)) {
      if (len < res[0]) {
        res[0] = len;
        res[1] = word;
      }
    }
  }

  return res[1];
};

export default shortestCompletingWord;
