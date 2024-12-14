const prefixCount = (words: string[], pref: string): number => {
  let count = 0;

  for (const w of words) {
    if (w.startsWith(pref)) count += 1;
  }

  return count;
};

export default prefixCount;
