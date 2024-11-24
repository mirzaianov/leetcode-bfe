const makeSmallestPalindrome = (s: string): string => {
  if (s.length < 2) return s;

  const arr: string[] = s.split('');

  let l = 0;
  let r: number = arr.length - 1;

  while (l <= r) {
    if (s.charAt(l) < s.charAt(r)) {
      arr[r] = arr[l];
    } else {
      arr[l] = arr[r];
    }

    l += 1;
    r -= 1;
  }

  return arr.join('');
};

export default makeSmallestPalindrome;
