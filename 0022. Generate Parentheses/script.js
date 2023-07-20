var generateParenthesis = function (n) {
  const res = [];

  backtrack(0, 0, '');

  function backtrack(start, end, curr) {
    if (start + end === 2 * n) {
      res.push(curr);
      return;
    }

    if (start < n) backtrack(start + 1, end, curr + '(');

    if (end < start) backtrack(start, end + 1, curr + ')');
  }

  return res;
};
