const maxPower = (s: string): number => {
  let cur = 1;
  let max = 1;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      cur += 1;
      max = Math.max(max, cur);
    } else {
      cur = 1;
    }
  }

  return max;
};

export default maxPower;
