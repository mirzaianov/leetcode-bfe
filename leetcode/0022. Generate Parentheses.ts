const generateParenthesis = (n: number): string[] => {
  const res: string[] = [];

  const backtrack = (start: number, end: number, curr: string) => {
    if (start + end === 2 * n) {
      res.push(curr);
      return;
    }

    if (start < n) {
      backtrack(start + 1, end, curr + '(');
    }

    if (end < start) {
      backtrack(start, end + 1, curr + ')');
    }
  };

  backtrack(0, 0, '');

  return res;
};
