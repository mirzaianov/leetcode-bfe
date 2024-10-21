const binaryGap = (n: number): number => {
  const s: string = n.toString(2);
  let l = 0;
  let r = 0;
  let max = 0;

  while (r < s.length) {
    if (s[r] === '1' && s[l] === '1') {
      max = Math.max(max, r - l);
      l = r;
    }

    r += 1;
  }

  return max;
};

export default binaryGap;
