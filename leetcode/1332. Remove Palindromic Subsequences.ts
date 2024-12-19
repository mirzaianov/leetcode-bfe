const removePalindromeSub = (s: string): number => {
  let l = 0;
  let r: number = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return 2;

    l += 1;
    r -= 1;
  }

  return 1;
};

export default removePalindromeSub;
