const numEquivDominoPairs = (dominoes: number[][]): number => {
  const map = new Map<string, number>();

  for (const d of dominoes) {
    const s: string = [...d].sort((a, b) => a - b).reduce((acc, item) => acc + String(item), '');

    map.set(s, (map.get(s) || 0) + 1);
  }

  let count = 0;

  for (const [, value] of map) {
    count += (value * (value - 1)) / 2;
  }

  return count;
};

export default numEquivDominoPairs;
