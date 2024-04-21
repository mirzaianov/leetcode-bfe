const reverseString = (s: string[]): void => {
  let l = 0;
  let r: number = s.length - 1;

  while (l <= r) {
    [s[l], s[r]] = [s[r], s[l]];

    l += 1;
    r -= 1;
  }
};

export default reverseString;
