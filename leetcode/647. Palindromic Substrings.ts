const expandAroundCenter = (s: string, l: number, r: number): number => {
  let count = 0;

  while (l >= 0 && r < s.length && s[l] === s[r]) {
    count += 1;

    l -= 1;
    r += 1;
  }

  return count;
};

const countSubstrings = (s: string): number => {
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    res += expandAroundCenter(s, i, i);
    res += expandAroundCenter(s, i, i + 1);
  }

  return res;
};

export default countSubstrings;
