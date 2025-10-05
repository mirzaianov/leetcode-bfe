const majorityFrequencyGroup = (s: string): string => {
  const map = new Map<string, number>();

  for (const l of s) {
    map.set(l, (map.get(l) || 0) + 1);
  }

  const map2 = new Map<number, number>();

  for (const [, value] of map) {
    map2.set(value, (map2.get(value) || 0) + 1);
  }

  let maxValue = -Infinity;

  for (const [, value] of map2) {
    if (value > maxValue) maxValue = value;
  }

  let maxKey = -Infinity;

  for (const [key, value] of map2) {
    if (value === maxValue && key > maxKey) maxKey = key;
  }

  let res = '';

  for (const [key, value] of map) {
    if (value === maxKey) {
      res += key;
    }
  }

  return res;
};

export default majorityFrequencyGroup;
