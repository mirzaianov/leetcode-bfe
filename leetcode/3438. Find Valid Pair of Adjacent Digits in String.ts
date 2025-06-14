const findValidPair = (s: string): string => {
  const n: number = s.length;

  if (n < 2) return '';

  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  for (let i = 0; i < n - 1; i += 1) {
    const first: string = s[i];
    const second: string = s[i + 1];

    if (
      first !== second &&
      map.get(first) === Number(first) &&
      map.get(second) === Number(second)
    ) {
      return `${first}${second}`;
    }
  }

  return '';
};

export default findValidPair;
