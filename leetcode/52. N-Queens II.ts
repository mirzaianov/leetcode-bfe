const totalNQueens = (n: number): number => {
  const col = new Set<number>();
  const posD = new Set<number>(); // r + c
  const negD = new Set<number>(); // r - c
  let res = 0;

  const backtrack = (r: number): void => {
    if (r === n) {
      res += 1;
      return;
    }

    for (let c = 0; c < n; c += 1) {
      if (col.has(c) || posD.has(r + c) || negD.has(r - c)) continue;

      col.add(c);
      posD.add(r + c);
      negD.add(r - c);

      backtrack(r + 1);

      col.delete(c);
      posD.delete(r + c);
      negD.delete(r - c);
    }
  };

  backtrack(0);

  return res;
};

export default totalNQueens;
