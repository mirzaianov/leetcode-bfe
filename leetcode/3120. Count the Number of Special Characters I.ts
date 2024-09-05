const numberOfSpecialChars = (word: string): number => {
  const set = new Set<string>(word.split(''));
  let count = 0;

  for (const value of set.values()) {
    if (set.has(value.toLowerCase()) && set.has(value.toUpperCase())) count += 1;
  }

  return count / 2;
};

export default numberOfSpecialChars;
