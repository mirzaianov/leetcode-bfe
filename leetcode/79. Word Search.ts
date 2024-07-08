const exist = (board: string[][], word: string): boolean => {
  const rowLen: number = board.length;
  const colLen: number = board[0].length;
  const set = new Set<string>();

  const dfs = (r: number, c: number, i: number): boolean => {
    if (i === word.length) return true;

    const val = `${r}${c}`;

    if (r < 0 || c < 0 || r >= rowLen || c >= colLen || word[i] !== board[r][c] || set.has(val))
      return false;

    set.add(val);

    const res =
      dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);

    set.delete(val);

    return res;
  };

  for (let j = 0; j < rowLen; j += 1) {
    for (let k = 0; k < colLen; k += 1) {
      if (dfs(j, k, 0)) return true;
    }
  }

  return false;
};

export default exist;
