const kthGrammar = (n: number, k: number): number => {
  let c = 0;
  let l = 0;
  let r = 2 ** (n - 1);

  for (let i = 0; i < n - 1; i += 1) {
    const m = l + Math.floor((r - l) / 2);

    if (k <= m) {
      r = m;
    } else {
      l = m + 1;
      c === 1 ? (c = 0) : (c = 1);
    }
  }

  return c;
};

export default kthGrammar;
