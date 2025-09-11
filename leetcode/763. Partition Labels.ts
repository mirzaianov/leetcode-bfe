const partitionLabels = (s: string): number[] => {
  const n: number = s.length;

  if (n < 2) return [n];

  const map = new Map<string, number>();

  for (let i = 0; i < n; i += 1) {
    map.set(s[i], i);
  }

  const res: number[] = [];
  let l = 0;
  let r = 0;

  for (let i = 0; i < n; i += 1) {
    const val: number | undefined = map.get(s[i]);

    if (val !== undefined) {
      r = Math.max(r, val);

      if (r === i) {
        res.push(r - l + 1);
        l = i + 1;
      }
    }
  }

  return res;
};

export default partitionLabels;
