const diStringMatch = (s: string): number[] => {
  const res: number[] = [];
  let max = s.length;
  let min = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'I') {
      res.push(min);
      min += 1;
    } else if (s[i] === 'D') {
      res.push(max);
      max -= 1;
    }
  }

  res.push(min);

  return res;
};

export default diStringMatch;
