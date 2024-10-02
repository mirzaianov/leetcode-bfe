const maxScore = (s: string): number => {
  let ones = 0;

  for (const l of s) {
    if (l === '1') ones += 1;
  }

  let zeros = 0;
  let max = 0;

  for (let i = 0; i < s.length - 1; i += 1) {
    s[i] === '0' ? (zeros += 1) : (ones -= 1);
    max = Math.max(max, zeros + ones);
  }

  return max;
};

export default maxScore;
