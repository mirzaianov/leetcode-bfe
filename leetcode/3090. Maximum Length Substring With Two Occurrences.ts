const maximumLengthSubstring = (s: string): number => {
  const map = new Map<string, number>();
  let res = 0;
  let r = 0;
  let l = 0;

  while (r < s.length) {
    const valR: string = s[r];

    while (map.get(valR) === 2) {
      map.set(s[l], map.get(s[l])! - 1);
      l += 1;
    }

    map.set(valR, (map.get(valR) || 0) + 1);
    res = Math.max(res, r - l + 1);
    r += 1;
  }

  return res;
};

export default maximumLengthSubstring;
