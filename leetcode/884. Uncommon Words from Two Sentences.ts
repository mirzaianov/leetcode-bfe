const uncommonFromSentences = (s1: string, s2: string): string[] => {
  const words: string[] = [...s1.split(' '), ...s2.split(' ')];
  const map = new Map<string, number>();

  for (const w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  const res: string[] = [];

  for (const [key, value] of map) {
    if (value === 1) res.push(key);
  }

  return res;
};

export default uncommonFromSentences;
