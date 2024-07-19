const findPermutationDifference = (s: string, t: string): number => {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    const secondIdx: number = t.indexOf(s[i]);

    count += Math.abs(i - secondIdx);
  }

  return count;
};

export default findPermutationDifference;
