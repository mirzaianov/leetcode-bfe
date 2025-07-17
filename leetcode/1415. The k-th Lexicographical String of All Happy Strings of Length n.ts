const getHappyString = (n: number, k: number): string => {
  let count = 0;
  let result = '';

  const backtrack = (curr: string): void => {
    if (count === k) return;

    if (curr.length === n) {
      count += 1;

      if (count === k) result = curr;

      return;
    }

    for (const l of ['a', 'b', 'c']) {
      if (curr.length > 0 && curr[curr.length - 1] === l) continue;

      backtrack(curr + l);
    }
  };

  backtrack('');

  return count < k ? '' : result;
};

export default getHappyString;
