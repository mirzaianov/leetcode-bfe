const maximumNumberOfStringPairs = (words: string[]): number => {
  const map = new Map<string, number>();

  for (const w of words) {
    const curr: string = w.split('').sort().join('');

    map.set(curr, (map.get(curr) || 0) + 1);
  }

  return [...map.values()].reduce((acc, val) => acc + Math.floor(val / 2), 0);
};

export default maximumNumberOfStringPairs;
