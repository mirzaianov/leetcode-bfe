const minimumPushes = (word: string): number => {
  const map = new Map<string, number>();

  for (const l of word) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  const sorted: number[] = [...map.values()].sort((a, b) => b - a);
  let count = 0;
  let k = 1;
  let i = 0;

  for (const item of sorted) {
    count += item * k;
    i += 1;

    if (i === 8) {
      i = 0;
      k += 1;
    }
  }

  return count;
};

export default minimumPushes;
