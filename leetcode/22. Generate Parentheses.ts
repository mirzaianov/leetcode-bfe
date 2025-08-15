const generateParenthesis = (n: number): string[] => {
  const res: string[] = [];

  const backtrack = (l: number, r: number, s: string): void => {
    if (l + r === n * 2) {
      res.push(s);

      return;
    }

    if (l < n) {
      backtrack(l + 1, r, `${s}(`);
    }

    if (r < l) {
      backtrack(l, r + 1, `${s})`);
    }
  };

  backtrack(0, 0, '');

  return res;
};

export default generateParenthesis;
