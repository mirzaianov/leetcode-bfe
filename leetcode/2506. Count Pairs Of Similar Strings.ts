const similarPairs = (words: string[]): number => {
  const map = new Map<string, number>();
  let count = 0;

  for (const word of words) {
    const curr: string = [...new Set([...word])].sort().join('');

    map.set(curr, (map.get(curr) || 0) + 1);
  }

  for (const [, value] of map) {
    const item: number = (value * (value - 1)) / 2;

    count += item;
  }

  return count;
};

export default similarPairs;
