const removeOuterParentheses = (s: string): string => {
  let res: string = '';
  let count = 0;

  for (const l of s) {
    if (l === ')') count -= 1;
    if (count >= 1) res += l;
    if (l === '(') count += 1;
  }

  return res;
};

export default removeOuterParentheses;
