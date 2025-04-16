const divideString = (s: string, k: number, fill: string): string[] => {
  const res: string[] = [];

  for (let i = 0; i < s.length; i += k) {
    let subs: string = s.slice(i, i + k);

    if (subs.length < k) {
      subs = subs.padEnd(k, fill);
    }

    res.push(subs);
  }

  return res;
};

export default divideString;
