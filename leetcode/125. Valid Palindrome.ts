const isPalindrome = (s: string): boolean => {
  const pattern: RegExp = /[A-Z0-9]/;
  let l = 0;
  let r: number = s.length - 1;

  while (l <= r) {
    const left: string = s[l].toUpperCase();
    const right: string = s[r].toUpperCase();

    if (!left.match(pattern)) {
      l += 1;
    } else if (!right.match(pattern)) {
      r -= 1;
    } else {
      if (left !== right) return false;

      l += 1;
      r -= 1;
    }
  }

  return true;
};

export default isPalindrome;
