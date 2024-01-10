const maxLengthBetweenEqualCharacters = (s: string): number => {
  const map = new Map<string, number>();
  const len: number = s.length;
  let max = -1;

  for (let i = 0; i < len; i += 1) {
    const current: string = s[i];

    if (map.has(current)) {
      const item = map.get(current);

      if (item === undefined) {
        throw new Error('Item is undefined');
      } else {
        const diff: number = i - item - 1;

        max = Math.max(max, diff);
      }
    } else {
      map.set(current, i);
    }
  }

  return max;
};

console.log(maxLengthBetweenEqualCharacters('abacba')); // 4
