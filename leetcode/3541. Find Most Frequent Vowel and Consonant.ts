const getMaxValue = (s: string, p: RegExp): number => {
  const map = new Map<string, number>();
  let max = 0;

  for (const l of s) {
    if (l.match(p)) {
      map.set(l, (map.get(l) || 0) + 1);
      max = Math.max(max, map.get(l) || 0);
    }
  }

  return max;
};

const maxFreqSum = (s: string): number => getMaxValue(s, /[aeiou]/) + getMaxValue(s, /[^aeiou]/);

export default maxFreqSum;
