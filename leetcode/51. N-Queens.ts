const solveNQueens = (n: number): string[][] => {
  const cols = new Set<number>();
  const posDiag = new Set<number>();
  const negDiag = new Set<number>();

  const board: string[][] = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  const res: string[][] = [];

  const backtrack = (r: number) => {
    if (r === n) {
      const copy: string[] = board.map((item) => item.join(''));

      res.push(copy);

      return;
    }

    for (let c = 0; c < n; c += 1) {
      if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

      cols.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = 'Q';

      backtrack(r + 1);

      cols.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = '.';
    }
  };

  backtrack(0);

  return res;
};

export default solveNQueens;
