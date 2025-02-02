const letterCasePermutation = (s: string): string[] => {
  const len: number = s.length;
  const pattern: RegExp = /[a-zA-Z]/;
  const store: string[] = [];
  const res: string[] = [];

  const backtrack = (i: number): void => {
    if (i === len) {
      res.push(store.join(''));

      return;
    }

    if (s[i].match(pattern)) {
      store[i] = s[i].toLowerCase();
      backtrack(i + 1);
      store[i] = s[i].toUpperCase();
      backtrack(i + 1);
    } else {
      store[i] = s[i];
      backtrack(i + 1);
    }
  };

  backtrack(0);

  return res;
};

export default letterCasePermutation;
