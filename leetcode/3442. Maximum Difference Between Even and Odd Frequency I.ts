const maxDifference = (s: string): number => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  let maxOddFreq = -Infinity;
  let minEvenFreq = Infinity;

  for (const [, val] of map) {
    if (val % 2 !== 0) {
      maxOddFreq = Math.max(maxOddFreq, val);
    } else {
      minEvenFreq = Math.min(minEvenFreq, val);
    }
  }

  return maxOddFreq - minEvenFreq;
};

export default maxDifference;
