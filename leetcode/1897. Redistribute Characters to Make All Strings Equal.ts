const makeEqual = (words: string[]): boolean => {
  const len: number = words.length;

  if (len === 1) return true;

  const map = new Map<string, number>();

  for (const word of words) {
    for (const letter of word) {
      map.set(letter, map.get(letter)! + 1 || 1);
    }
  }

  for (const [key, value] of map) {
    if (value % len !== 0) return false;
  }

  return true;
};
