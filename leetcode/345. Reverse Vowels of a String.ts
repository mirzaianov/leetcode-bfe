const reverseVowels = (s: string): string => {
  if (s.length < 2) return s;

  const pattern = /[aeiou]/i;
  const arr: string[] = s.split('');
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (!arr[l].match(pattern)) l += 1;

    if (!arr[r].match(pattern)) r -= 1;

    if (arr[l].match(pattern) && arr[r].match(pattern)) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l += 1;
      r -= 1;
    }
  }

  return arr.join('');
};

export default reverseVowels;
