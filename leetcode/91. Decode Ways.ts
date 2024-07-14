const numDecodings = (s: string): number => {
  const map = new Map<number, number>();

  map.set(s.length, 1);

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === '0') {
      map.set(i, 0);
    } else {
      map.set(i, map.get(i + 1)!);
    }

    if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && `0123456`.includes(s[i + 1])))) {
      map.set(i, map.get(i)! + map.get(i + 2)!);
    }
  }

  return map.get(0)!;
};

export default numDecodings;
