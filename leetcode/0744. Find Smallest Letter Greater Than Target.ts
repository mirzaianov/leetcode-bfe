const nextGreatestLetter = (letters: string[], target: string): string => {
  let l = 0;
  let r: number = letters.length - 1;

  while (l <= r) {
    const m: number = l + Math.floor((r - l) / 2);

    if (letters[m] > target) r = m - 1;
    else l = m + 1;
  }

  if (l === letters.length) return letters[0];

  return letters[l];
};

export default nextGreatestLetter;
