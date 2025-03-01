const shortestToChar = (s: string, c: string): number[] => {
  const idxs: number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === c) idxs.push(i);
  }

  const res: number[] = [];

  for (let i = 0; i < s.length; i += 1) {
    let minValue: number = Infinity;

    for (const idx of idxs) {
      const diff: number = Math.abs(i - idx);

      minValue = Math.min(minValue, diff);
    }

    res.push(minValue);
  }

  return res;
};

export default shortestToChar;
