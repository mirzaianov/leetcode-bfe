const percentageLetter = (s: string, letter: string): number => {
  const len: number = s.length;
  let count = 0;

  for (const l of s) {
    if (l === letter) count += 1;
  }

  return Math.floor((100 * count) / len);
};

export default percentageLetter;
